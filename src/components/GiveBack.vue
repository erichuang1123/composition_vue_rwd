<script>
import { reactive } from '@vue/reactivity'
export default {
    setup(){
        const arrData = reactive({data : [
            {
                giveback : 'I have worked with many companies offering design & architecture services, and out of all you were one who really stood out from the rest and did a great job.',
                src : '../assets/pic/user-1-80x80.jpg',
                name : 'KATE WILLIAMS',
                profession : 'Entrepreneur'
            },
            {
                giveback : 'I was looking for top-notch creativity and quality service and I found what I needed in your team. You took all my ideas and demands into consideration and made a great project.',
                src : '../assets/pic/user-2-80x80.jpg',
                name : 'ANN LEE',
                profession : 'Freelancer'
            },
            {
                giveback : 'I selected Spectrum because of their architects’ rigorous design background and education. They exceeded my expectations and did a great a job on extending and redesigning my house.',
                src : '../assets/pic/user-3-80x80.jpg',
                name : 'SAM MCMILLAN',
                profession : 'Manager'
            }
        ]})
        return {arrData}
    }
}
</script>

<template>
  <div class="section section_giveBack">
      <div class="container">
          <div class="commact">
              <div class="commat1"></div>
              <div class="commat2"></div>
          </div>
          <div class="giveback">I have worked with many companies offering design & architecture services, and out of all you were one who really stood out from the rest and did a great job.</div>
          <div class="give_item">
              <div class="pic">
                  <img src="../assets/pic/user-1-80x80.jpg" alt="">
              </div>
              <div class="txt">
                  <div class="name">KATE WILLIAMS</div>
                  <div class="work">Entrepreneur</div>
              </div>
          </div>
          <div class="our_page">
              <a href="javascript:;" class="page"></a>
              <a href="javascript:;" class="page"></a>
              <a href="javascript:;" class="page"></a>
          </div>
          <div class="give_wrap">
              <p>Trusted by</p>
              <ul>
                  <li>
                      <a href="javascript:;">
                          <img src="../assets/pic/clients-1-87x54.png" alt="">
                      </a>
                  </li>
                  <li>
                      <a href="javascript:;">
                          <img src="../assets/pic/clients-2-112x45.png" alt="">
                      </a>
                  </li>
                  <li>
                      <a href="javascript:;">
                          <img src="../assets/pic/clients-3-146x28.png" alt="">
                      </a>
                  </li>
                  <li>
                      <a href="javascript:;">
                          <img src="../assets/pic/clients-4-84x47.png" alt="">
                      </a>
                  </li>
                  <li>
                      <a href="javascript:;">
                          <img src="../assets/pic/clients-5-131x29.png" alt="">
                      </a>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<style scoped>
    .section_giveBack{
        padding: 40px 15px;
        background-color: var(--bac_black);
        color: #fff;
    }
    .giveback{
        margin-bottom: 20px;
        position: relative;
        text-align: center;
        font-size: 18px;
        line-height: 1.1;
    }
    .commact{
        position: relative;
        height: 40px;
    }
    .commat1::before,
    .commat2::before{
        content: '';
        width: 15px;
        height: 15px;
        position: absolute;
        top: 0px;
        left: 46%;
        background-color: var(--bac_brown);
    }
    .commat1::after,
    .commat2::after{
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: 15px;
        left: 46%;
        border-top: 5px solid var(--bac_brown);
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid var(--bac_brown);
    }
    .commat2::before{
        left: 52%;
    }
    .commat2::after{
        left: 52%;
    }
    .give_item{
        margin-bottom: 23px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .give_item .pic{
        width: 60px;
        border-radius: 20px;
        overflow: hidden;
    }
    .give_item .txt{
        margin-left: 15px;
    }
    .give_item .name{
        margin-bottom: 5px;
    }
    .give_item .work{
        color: var(--bac_brown);
    }
    .our_page{
        margin-bottom: 25px;
        text-align: center;
    }
    .give_wrap p{
        margin-bottom: 30px;
        text-align: center;
    }
    .give_wrap{
        font-size: 18px;
        color: var(--color_gray);
    }
    .give_wrap ul{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .give_wrap li{
        margin: 0 auto 20px;
        width: 120px;
    }
    .give_wrap li a img{
        filter: contrast(0%);
        transition: filter .3s;
    }
    .give_wrap li:hover img{
        filter: contrast(100%);
    }
</style>