<script>
import { useBacMove } from '@/composition-api/index.js'
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useScrollAddClass} from '@/composition-api/useScrollAddClass'
export default {
    setup(props,context){
        const section = ref(null);
        const moveX = ref(0);
        const moveY = ref(0);
        const open = ref(undefined);
        onMounted(()=>{
            section.value.addEventListener('mousemove',(e)=>{
                const { x, y } = useBacMove(section,e);
                moveX.value = (x.value + (window.innerWidth / 5)) + 'px';
                moveY.value = (y.value + (window.innerWidth / 15))+ 'px';
                                            //第一個數字是為了調整位置 
            })
            window.addEventListener('scroll',()=>{
                if(open.value == undefined){
                    open.value = useScrollAddClass(section);
                }
            })
            context.emit('fromData',section)
        })
        return { section , moveX , moveY , open}
    }
}
</script>

<template>
  <section :class="['section','section_FromData',{active : open}]" ref="section">      
      <div class="container">
          <div class="from_wrap wrap1">
              <div class="from_item">
                  <div class="title">
                      <div class="pic">
                          <i class="fa fa-home" aria-hidden="true"></i>
                      </div>
                      <h3>ARCHITECTURE</h3>
                  </div>
                  <div class="txt">
                      <p>We provide high-quality architecture services.</p>
                  </div>
              </div>
              <div class="from_item">
                  <div class="title">
                      <div class="pic">
                          <i class="fa fa-pencil" aria-hidden="true"></i>
                      </div>
                      <h3>INTERIOR DESIGN</h3>
                  </div>
                  <div class="txt">
                      <p>Our team offers unique and stylish architecture solutions.</p>
                  </div>
              </div>
              <div class="from_item">
                  <div class="title">
                      <div class="pic">
                          <i class="fa fa-solid fa-lightbulb"></i>
                      </div>
                      <h3>LIGHTING DESIGN</h3>
                  </div>
                  <div class="txt">
                      <p>Let our team design unique lighting for your home.</p>
                  </div>
              </div>
          </div>
          <div class="from_wrap wrap2">
              <h2>
                  FIND OUT THE PRICE<br/>
                   OF YOUR HOME
              </h2>
              <p>WE WILL CONTACT YOU WITHIN 24 HOURS</p>
              <div class="from_from">
                  <input type="text" placeholder="Name">
                  <input type="email" placeholder="Email">
                  <input type="phone" placeholder="Phone">
                  <a href="javascript:;">SUBMIT</a>
              </div>
          </div>
      </div>
  </section>
</template>

<style scoped>
    .section_FromData{
        padding: 40px 0;
        position: relative;
    }
    .wrap1{
        margin-bottom: 40px;
    }
    .from_item{
        margin-bottom: 35px;
        padding: 15px 0;
        text-align: center;
    }
    .from_item .title .pic{
        margin-bottom: 20px;
        font-size: 35px;
        position: relative;
    }
    .from_item .title .pic::before{
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        top: 13%;
        transform: translateX(20px);
        background-color: #C4956A99;
        border-radius: 50%;
    }
    .from_item .title .pic svg{
        pointer-events: none;
    }
    .from_item .title h3{
        margin-bottom: 15px;
        font-weight: 600;
        font-size: 17px;
    }
    .from_item .txt p{
        color: var(--color_gray);
        line-height: 1.3;
        font-size: 16.5px;
    }
    .wrap2 h2{
        margin-bottom: 20px;
        text-align: center;
        font-size: 25px;
        font-weight: 600;
    }
    .wrap2 p{
        margin-bottom: 30px;
        text-align: center;
        color: var(--bac_brown);
    }
    .from_from{
        margin: 0 auto;
        padding: 40px 35px 40px;
        width: 75%;
        background-color: var(--bac_black);
        color: #fff;
        border-radius: 10px;
    }
    .from_from input{
        margin-top: 5px;
        margin-bottom: 25px;
        padding: 5px 0;
        width: 100%;
        display: block;
        background-color: transparent;
        outline: none;
        border: none;
        font-size: 16px;
        border-bottom: 1px solid #6665;
        color: #fff;
    }
    .from_from input:last-of-type{
        margin-bottom: 35px;
    }
    .from_from input::placeholder{
        color: #fff;
        transition: opacity .3s;
    }
    .from_from input:focus::placeholder{
        opacity: 0;
    }
    .from_from a{
        padding: 10px 20px;
        color: #fff;
        background-color: var(--bac_brown);
        border: none;
        transition: background-color .3s;
    }
    .from_from a:hover{
        background-color: transparent;
    }
    @media screen and ( min-width: 576px){
        .wrap1{
            padding: 0 30px;
            margin-bottom: 0;
            display: flex;
            justify-content: space-around;
            box-sizing: border-box;
        }
        .wrap1 .from_item{
            width: 30%;
        }
    }
    @media screen and ( min-width: 768px){
        .section_FromData{
            --xmove : v-bind(moveX);
            --ymove : v-bind(moveY);
            padding: 80px 50px;
            background-image: url('../assets/pic/index-7-694x539.jpg');
            background-repeat: no-repeat;
            background-size: 60%;
            background-position: var(--xmove) var(--ymove);
        }
        .container{
            display: flex;
            opacity: 1;
            justify-content: space-between;
        }
        .wrap1{
            width: 40%;
            flex-direction: column;
            /* justify-content: center; */
        }
        .wrap1 .from_item{
            width: 100%;
        }
        .from_item{
            margin-bottom: 55px;
            padding: 0;
        }
        .from_item .title{
            margin-bottom: 25px;
            display: flex;
            align-items: center;
        }
        .from_item .title .pic{
            margin: 0;
        }
        .from_item .title h3{
            margin: 0 0 0 20px;
        }
        .from_item .txt p{
            text-align: left;
        }
        .wrap2{
            margin-left: auto;
            padding: 0;
            width: 50%;
        }
        .wrap2 h2{
            text-align: left;
        }
        .wrap2 p{
            text-align: left;
        }
        .from_from{
            margin: 0;
            box-shadow: 7px 7px 10px 15px #aaa5;
        }
        .from_from input{
            margin-bottom: 45px;
        }
    }
    @media screen and ( min-width: 992px){
        .section_FromData{
            padding: 130px 0px 100px;
        }
        .from_item .txt p{
            width: 240px;
            text-align: left;
            font-size: 15px;
        }
    }
    @media screen and ( min-width: 1200px){
        .section_FromData{
            background-size: 50%;
        }
    }
</style>