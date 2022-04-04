<script>
import { reactive, ref } from '@vue/reactivity'
import { useScrollAddClass } from '@/composition-api/useScrollAddClass'
import { onMounted } from '@vue/runtime-core';
export default {
    setup(){
        const domArr = reactive({data : [
            {
                giveback : 'I have worked with many companies offering design & architecture services, and out of all you were one who really stood out from the rest and did a great job.',
                src : require('../assets/pic/user-1-80x80.jpg'),
                name : 'KATE WILLIAMS',
                profession : 'Entrepreneur'
            },
            {
                giveback : 'I was looking for top-notch creativity and quality service and I found what I needed in your team. You took all my ideas and demands into consideration and made a great project.',
                src : require('../assets/pic/user-2-80x80.jpg'),
                name : 'ANN LEE',
                profession : 'Freelancer'
            },
            {
                giveback : 'I selected Spectrum because of their architects’ rigorous design background and education. They exceeded my expectations and did a great a job on extending and redesigning my house.',
                src : require('../assets/pic/user-3-80x80.jpg'),
                name : 'SAM MCMILLAN',
                profession : 'Manager'
            }
        ]})
        const section = ref(null);
        const showObj = reactive({data : {}})
        const index = ref(0);
        const open = ref(undefined);
        let timer = null;
        showObj.data = domArr.data[0];
        const clickFn = (number) => {
            clearInterval(timer);
            showObj.data = domArr.data[number];
            index.value = number;
            timer = setInterval(() => {
                index.value+=1;
                if(index.value > domArr.data.length - 1){
                    index.value = 0;
                }
                showObj.data = domArr.data[index.value];
            }, 3000);
        }
        onMounted(()=>{
            window.addEventListener('scroll',()=>{
                if(open.value == undefined){
                    open.value = useScrollAddClass(section);
                }
            })
        })
        return {domArr , showObj , index , clickFn , open , section}
    }
}
</script>

<template>
  <div :class="['section','section_giveBack',{active:open}]" ref="section">
      <div class="container">
           <div class="commact">
               <div class="commat1"></div>
               <div class="commat2"></div>
           </div>
           <div class="giveback">{{showObj.data.giveback}}</div>
           <div class="give_wrap wrap1">
              <div class="give_item">
                <div class="pic">
                    <img :src="showObj.data.src" alt="">
                </div>
                <div class="txt">
                    <div class="name">{{showObj.data.name}}</div>
                    <div class="work">{{showObj.data.profession}}</div>
                </div>
            </div>
            <div class="our_page">
                <a href="javascript:;" :class="['page',{active:index == 0}]" @click="clickFn(0)"></a>
                <a href="javascript:;" :class="['page',{active:index == 1}]" @click="clickFn(1)"></a>
                <a href="javascript:;" :class="['page',{active:index == 2}]" @click="clickFn(2)"></a>
            </div>
        </div>
          <div class="give_wrap wrap2">
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
        color: #fff;
        background-image: url('../assets/pic/bg-image-1.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
    .giveback{
        margin-bottom: 20px;
        position: relative;
        text-align: center;
        font-size: 18px;
        line-height: 1.4;
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
        left: 47%;
        background-color: var(--bac_brown);
    }
    .commat1::after,
    .commat2::after{
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: 15px;
        left: 47%;
        border-top: 5px solid var(--bac_brown);
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid var(--bac_brown);
    }
    .commat2::before{
        left: 51%;
    }
    .commat2::after{
        left: 51%;
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
        margin-left: 25px;
    }
    .give_item .name{
        margin-bottom: 10px;
        font-weight: 700;
        color: #fff;
    }
    .give_item .work{
        color: var(--bac_brown);
    }
    .our_page{
        margin-bottom: 25px;
        text-align: center;
    }
    .wrap2 p{
        margin-bottom: 30px;
        text-align: center;
        font-weight: 900;
    }
    .wrap2{
        font-size: 18px;
        color: var(--color_gray);
    }
    .wrap2 ul{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .wrap2 li{
        margin: 0 auto 20px;
        width: 120px;
    }
    .wrap2 li a img{
        filter: contrast(0%);
        transition: filter .3s;
    }
    .wrap2 li:hover img{
        filter: contrast(100%);
    }
    @media screen and ( min-width: 576px){
        .section_giveBack{
            padding: 40px 30px;
        }
        .our_page{
            text-align: left;
        }
        .giveback{
            text-align: left;
            font-size: 23.5px;
        }
        .wrap1{
            margin-bottom: 20px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .wrap2 li{
            margin: 0 auto 20px;
            width: 150px;
        }
        .give_item{
            margin: 0;
        }
        .our_page{
            margin: 0;
        }
    }
    @media screen and ( min-width: 768px){
        .section_giveBack{
            padding: 50px 40px;
        }
        .commat1::before,
        .commat2::before{
            left: 0%;
        }
        .commat1::after,
        .commat2::after{
            left: 0%;
        }
        .commat2::before{
            left: 3%;
        }
        .commat2::after{
            left: 3%;
        }
        .giveback{
            margin-left: 100px;
        }
        .wrap1{
            margin-left: 100px;
            width: auto;
        }
        .wrap2 p{
            margin-left: 100px;
            text-align: left;
        }
        .wrap2 ul{
            margin-left: 100px;
        }
        .wrap2 li{
            margin: 0 10px 20px 0;
            width: 30%;
        }
        .wrap2 li img{
            width: 60%;
        }
        @media screen and ( min-width: 992px){
            .giveback{
                font-size: 32px;
            }
            .wrap1{
                margin-bottom: 80px;
            }
            .wrap1 .pic{
                width: 80px;
            }
            .wrap1 .txt{
                font-size: 20px;
            }
        }     
        @media screen and ( min-width: 1200px){
            .section_giveBack{
                padding: 100px 30px;
            }
            .giveback{
                margin-bottom: 60px;
            }
            .wrap2 li{
                margin: 0;
                width: 20%;
            }        
            .commat1::before,
            .commat2::before{
                left: 1%;
            }
            .commat1::after,
            .commat2::after{
                left: 1%;
            }
            .commat2::before{
                left: 3%;
            }
            .commat2::after{
                left: 3%;
            }
        }
    }
</style>