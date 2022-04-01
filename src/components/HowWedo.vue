<script>
import { reactive } from '@vue/reactivity'
export default {
    setup(){
        const domArr = reactive({data : [
            {
                title : 'MEET AND DEFINE GOALS',
                content1 : 'The first thing we do is meeting with our clients and talk through their goals on a future project. During this meeting, feel free to communicate your ideas and ask lots of questions.',
                content2 : 'This stage is highly decisive as you can evaluate the work of your potential architect by browsing their portfolio. As a client, you may also assess whether the architect listens to your needs and confirms that he or she understands them.',
                src : '../assets/pic/index-1-531x327.jpg'
            },
            {
                title : 'WORKING ON THE CONCEPT',
                content1 : 'The next step of our cooperation lies in developing the concept of your future home. It helps us define every single factor that makes the construction process of your home successful.',
                content2 : 'Our team of designers and architects has to plan every single step of the project to make sure that the final result will meet not only your requirements but also international construction and safety standards. This is when monitoring & control begin.',
                src : '../assets/pic/index-2-531x327.jpg',
            },
            {
                title : 'BUILDING YOUR HOME',
                content1 : 'There’s no doubt that the most important and responsible part of building a home is its construction process. As we work with reliable contractors, a great result is guaranteed.',
                content2 : 'This stage is one of the most complex ones as it includes a variety of tasks that must be controlled - from preparing the construction site to installing insulation and completing drywall as well as working on exterior.',
                src : '../assets/pic/index-3-531x327.jpg',
            },
            {
                title : 'COMPLETING A PROJECT',
                content1 : 'When the project gets to its final stage, our quality control team conducts the final check of the building to make sure everything has been carried out the proper way.s',
                content2 : 'Our employees will also make sure that all interior elements & fixtures are correctly installed during this final step. After everything is completed, we invite our client to assess the final result and experience the quality performance of our project.',
                src : '../assets/pic/index-4-531x327.jpg',
            }
        ]})
        return {domArr}
    }
}
</script>

<template>
  <section class="section section_HowWedo">
      <div class="container">
          <div class="how_wrap wrap1">
              <div class="how_title">
                <h2>
                    <span>HOW WE</span> 
                    <span>DO</span> IT
                </h2>
                <p>4 STEP TO A NEW HOME</p>
              </div>
              <div class="txt">
                  <h3>MEET AND DEFINE GOALS</h3>
                  <p>The first thing we do is meeting with our clients and talk through their goals on a future project. During this meeting, feel free to communicate your ideas and ask lots of questions.</p>
                  <p>This stage is highly decisive as you can evaluate the work of your potential architect by browsing their portfolio. As a client, you may also assess whether the architect listens to your needs and confirms that he or she understands them.</p>
              </div>
          </div>
          <div class="how_wrap wrap2">
              <ul>
                  <li class="active">
                      <span>01</span>
                      <a href="javascript:;">
                          ACQUAINTANCE WITH THE CUSTOMER
                      </a>
                  </li>
                  <li>
                      <span>02</span>
                      <a href="javascript:;">
                          PROJECT CONCEPT DEVELOPMENT
                      </a>
                  </li>
                  <li>
                      <span>03</span>
                      <a href="javascript:;">
                          WORKING ON INTERIOR AND EXTERIOR
                      </a>
                  </li>
                  <li>
                      <span>04</span>
                      <a href="javascript:;">
                          FINISHING TOUCHES FOR YOUR FUTURE HOME
                      </a>
                  </li>
              </ul>
              <div class="pic">
                  <img src="../assets/pic/index-1-531x327.jpg" alt="">
              </div>
          </div>
      </div>
  </section>
</template>

<style scoped>
    .section_HowWedo{
        padding: 30px 15px 30px;
        background-color: var(--bac_black);
        position: relative;
    }
    .section_HowWedo::before{
        content: '';
        width: 400px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        border-left: 1px solid #333333;
        border-right: 1px solid #333333;
        z-index: 1;
        /* background-image: linear-gradient(90deg,
                                        #333 0 .5%,
                                        #282828 0.6% 49.8%,
                                        #333 49.6% 50.1%,
                                        #282828 50.2% 99.4%,
                                        #333 99.5% 100%
                                        );
        transform: translateX(-50%);
        box-shadow: 200px 0 0 0 #333333,
                    -200px 0 0 0 #333333; */
    }
    .section_HowWedo::after{
        content: '';
        width: 1px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: #333333;
        z-index: 1;
    }
    .container{
        position: relative;
        z-index: 2;
    }
    .how_title{
        display: flex;
        flex-direction: column;
    }
    .how_title h2{
        margin-bottom: 40px;
        order: 2;
        color: #fff;
        font-size: 35px;
        font-weight: 400;
    }
    .how_title h2 span:first-of-type{
        font-weight: 900;
        color: #fff;
    }
    .how_title h2 span:last-of-type{
        font-weight: 900;
        color: #fff;
    }
    .how_wrap .how_title p{
        margin-bottom: 15px;
        order: 1;
        color: var(--bac_brown);
    }
    .how_wrap h3{
        margin-bottom: 15px;
        color: var(--bac_brown);
        font-size: 23px;
        font-weight: 600;
    }
    .how_wrap p{
        color: var(--color_gray);
        line-height: 1.2;
    }
    .how_wrap:first-of-type p:first-of-type{
        margin-bottom: 15px;
    }
    .how_wrap:first-of-type p:last-of-type{
        margin-bottom: 30px;
    }
    .how_wrap ul{
        margin-bottom: 20px;
    }
    .how_wrap li{
        padding: 10px 0;
        display: flex;
    }
    .how_wrap span{
        margin-right: 10px;
        color: var(--color_gray);
        transition: color .3s;
    }
    .how_wrap a{
        color: var(--color_gray);
        transition: color .3s;
        font-weight: 600;
        line-height: 1.3;
    }
    .how_wrap li.active span{
        color: var(--bac_brown);
    }
    .how_wrap li.active a{
        color: #fff;
    }
    @media screen and ( min-width: 576px){
        .section_HowWedo{
            padding: 40px 25px 40px;
        }
        .how_wrap ul{
            margin: 0 0 30px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .how_wrap ul li{
            width: 47%;
        }
    }
    @media screen and ( min-width: 768px){
        .section_HowWedo{
            padding: 85px 25px 85px;
        }
    }
    @media screen and ( min-width: 992px){
        .section_HowWedo{
            padding: 90px 25px;
        }
        .container{
            display: flex;
            justify-content: space-between;
        }
        .wrap1{
            width: 40%;
        }
        .wrap2{
            width: 55%;
        }
        .how_title h2{
            font-size: 50px;   
            line-height: 1.2;         
        }
        .how_title h2 span:first-of-type{
            display: block;
        }
        .how_wrap h3{
            font-size: 30px;
        }
        .how_wrap p{
            font-size: 18px;
        }
        .wrap2 ul{
            margin-bottom: 75px;
        }
        .wrap2 .pic{
            width: 100%;
        }
    }
    @media screen and ( min-width: 1200px){
        .section_HowWedo{
            padding: 90px 50px 90px;
        }
        .wrap2{
            margin-left: auto;
            width: 45%;
        }
    }
</style>