<script>
import { reactive, ref } from '@vue/reactivity'
import { useSwitchScreen } from '@/composition-api/index.js'
import { onMounted, watch } from '@vue/runtime-core'
export default {
    setup(props,context){
        const dataArr = reactive({data : [
            {
                src : require('../assets/pic/slide-1-1339x729.jpg'),
                li1 : '2750 DUFFY ST',
                li2 : '200 SQ. M.',
                li3 : '$ 240 000',
            },
            {
                src : require('../assets/pic/slide-2-1339x729.jpg'),
                li1 : '5032 HEWES AVE',
                li2 : '290 SQ. M.',
                li3 : '$ 390 000',
            },
            {
                src : require('../assets/pic/slide-3-1339x729.jpg'),
                li1 : '2239 WILMAR FARM RD',
                li2 : '350 SQ. M.',
                li3 : '$ 340 000',
            }
        ]})
        const {number,nextFn,prevFn} = useSwitchScreen(dataArr.data.length)
        const dom = ref(null);
        onMounted(()=>{
            context.emit('banner',dom)
        })        
        return {dataArr,number,nextFn,prevFn,open,dom}
    }
}
</script>

<template>
    <section class="section_banner" ref="dom">
        <div class="container">
            <div class="banner_wrap wrap1">     
                <h2>
                    DESIGNING<br>
                    &BUILDING
                </h2>
                <p>
                    MODERN ENRGY<br>
                    EFFICEINT HOURSES<br>
                    FROM 150 SQ.M.
                </p>
                <a class="contact" href="javascript:;">
                    CONTACT US
                    <span class="moveBtn moveBtn1"></span>
                    <span class="moveBtn moveBtn2"></span>
                    <span class="moveBtn moveBtn3"></span>
                    <span class="moveBtn moveBtn4"></span>
                </a>
                <div class="control_btn">
                    <a href="javascript:;" class="prev" @click="prevFn">
                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                    </a>
                    <a href="javascript:;" class="next" @click="nextFn">
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div class="banner_wrap wrap2">
                <transition-group name="fad">
                <div :class="['banner_item',{none : index !== number}]" v-for="(item,index) in dataArr.data" :key="item.li1" v-show="index == number">
                    <div class="pic">
                        <img :src="item.src" alt="房子">
                    </div>
                    <ul>
                        <li>{{item.li1}}</li>
                        <li>{{item.li2}}</li>
                        <li>{{item.li3}}</li>
                    </ul>
                </div>
                </transition-group>
            </div>
            <div class="banner_footer">
                54+ WORKS
            </div>
        </div>
    </section>
</template>

<style scoped>
    .section_banner{
        padding: 25px 0;
        position: relative;
        background-color: var(--bac_black);
        color: #fff;
    }
    h2{
        margin-bottom: 20px;
        text-align: center;
        font-size: 30px;
        font-weight: 900;
        line-height: 1.1;
    }
    p{
        margin-bottom: 20px;
        font-size: 18px;
        text-align: center;
        line-height: 1.2;
        color: var(--bac_brown);
        font-weight: 600;
    }
    .contact{
        margin-left: 50%;
        margin-bottom: 40px;
        padding: 10px 18px;
        display: inline-block;
        border: 1px solid var(--bac_brown);
        position: relative;
        transform: translate(-50%);
        color: #fff;
        font-weight: 600;
        transition: border-color .3s;
    }
    .contact:hover{
        border-color: transparent;
    }
    .contact:hover .moveBtn1{
      animation: move1 1.5s infinite;
    }
    .contact:hover .moveBtn2{
      animation: move2 1.5s infinite;
    }
    .contact:hover .moveBtn3{
      animation: move3 1.5s infinite;
    }
    .contact:hover .moveBtn4{
      animation: move4 1.5s infinite;
    }
    .wrap1 h2,
    .wrap1 p,
    .wrap1 a{
        position: relative;
        z-index: 5;
    }
    .wrap1::before{
        content: '';
        width: 200px;
        height: 45%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        border-left: 1px solid #333333;
        border-right: 1px solid #333333;
        z-index: 1;
    }
    .wrap1::after{
        content: '';
        width: 1px;
        height: 45%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: #333333;
        z-index: 1;
    }
    .control_btn{
        padding: 10px;
        display: flex;
        justify-content: center;
        background-color: #313131;
    }
    .control_btn a{
        margin: 0 10px;
        width: 30px;
        height: 30px;
        padding: 5px;
        line-height: 27px;
        font-size: 20px;
        text-align: center;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 50%;
        transition: color .3s;
    }
    .control_btn a:hover{
        color: #fff5;
    }
    .pic img{
        width: 100%;
        height: 100%;
    }
    .banner_wrap ul{
        padding: 20px 0;
        display: flex;
        justify-content: center;
    }
    .banner_wrap ul li:nth-of-type(2),
    .banner_wrap ul li:nth-of-type(3){
        color: var(--bac_brown);
    }
    .banner_wrap ul li{
        margin: 0 20px;
        font-weight: 600;
    }
    .wrap2{
        position: relative;
    }
    .banner_item{
        position: relative;
    }
    .banner_item.none{
        position: absolute;
        width: 100%;
        top: 0;
        left: 0px;
    }
    .banner_footer{
        position: absolute;
        left: 50%;
        bottom: 5px;
        font-size: 20px;
        transform: translateX(-50%);
        opacity: .05;
        font-weight: 700;
    }
    @media screen and ( min-width: 576px){
        .section_banner{
            padding: 0;
        }
        .section_banner .container{
            display: flex;
        }
        .wrap1{
            padding: 50px 0 0;
            width: 40%;
            position: relative;
        }
        .wrap1::before{
            width: 200px;
            height: 100%;
        }
        .wrap1::after{
            height: 100%;
        }
        .wrap2{
            width: 60%;
        }
        .contact{
            width: 110px;
            text-align: center;
        }
        .control_btn{
            padding: 30px 0;
        }
        .banner_wrap h2,
        .banner_wrap p{
            padding: 0 15px;
        }
        .pic{
            height: 300px;
        }
        .banner_wrap ul{
            flex-wrap: wrap;
        }
        .banner_wrap ul li{
            margin-bottom: 10px;
        }
        .banner_footer{
            left: 69%;
        }
    }
    @media screen and ( min-width: 768px){
        .wrap1{
            position: relative;
        }
        .banner_wrap h2,
        .banner_wrap p{
            padding: 0 30px;
            text-align: left;
            position: relative;
            z-index: 2;
        }
        .banner_wrap h2{
            font-size: 33px;
        }
        .banner_wrap p{
            margin-bottom: 35px;
            font-size: 20px;
        }
        .pic{
            height: 330px;
        }
        .contact{
            margin: 0 0 40px 30px;
            transform: translate(0);
            position: relative;
            z-index: 2;
        }   
        .banner_wrap ul{
            padding: 30px 0;
        }
        .banner_footer{
            bottom: 5px;
            font-size: 30px;
        }
        .control_btn{
            position: relative;
            z-index: 2;
        }
    }
    @media screen and ( min-width: 992px){
        .wrap1{
            width: 30%;
            padding: 100px 0px 100px;
            position: relative;
        }
        .wrap1 h2{
            margin-bottom: 30px;
            font-size: 40px;
        } 
        h2::before{
            content: '';
            position: absolute;
            top: 350px;
            left: 0;
            width: 100%;
            height: 100px;
            background-color: #313131;
        }
        .wrap1 p{
            /* margin-bottom: 20px; */
            font-size: 18px;
            margin-left: 40px;
        }
        .contact{
            padding: 15px 20px;
        }
        .wrap1 .control_btn{
            padding: 15px 10px;
            position: absolute;
            left: 120px;
            bottom: 60px;
            background-color: var(--bac_brown);
        }
        .wrap2{
            width: 70%;
        }
        .wrap2 .pic{
            height: 450px;
        }
        .banner_footer{
            top: 87%;
            left: 42%;
            font-size: 38px;
        }
        .wrap2 ul{
            padding: 0;
            height: 103px;
            justify-content: flex-end;
            align-items: center;
        }
        .wrap2 ul li{
            margin-bottom: 0;
        }
        .control_btn{
            box-shadow: 15px 15px 25px 20px #0005;
        }
    }
    @media screen and ( min-width: 1200px){
        .container{
            width: auto;
        }
        .banner_wrap{
            height: 100%;
        }
        .wrap1 h2{
            margin-top: 30px;
            margin-bottom: 30px;
            font-size: 45px;
            text-align: center;
        } 
        h2::before{
            top: 470px;
        }
        .wrap1 p{
            margin-bottom: 80px;
            margin-left: 23%;
            font-size: 18px;
        }
        .contact{
            margin: 0 0 90px 12%;
        }
        .wrap1 .control_btn{
            padding: 30px 20px;
            left: 44%;
            bottom: 0%;
        }
        .wrap2 .pic{
            height: 600px;
        }
        .wrap2 ul{
            font-size: 18px;
        }
        .banner_footer{
            left: 50%;
            top: 88.5%;
            font-size: 60px;
        }
    }
</style>