<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { onMounted, watch } from '@vue/runtime-core'
export default {
    props : {
        domArr : {
            type : Object,
            default : {}
        }
    },
    setup(props){
        const menu = ref(null)
        const store = useStore();
        const open = ref(store.state.menuOpen);
        const scroll = ref(false);
        let nowMove = 0;
        let timer = null;
        const liActive = ref(0);
        const openHandler = ()=>{
            open.value = !open.value;
        }
        function reload(){
            location.reload();
        }
        window.addEventListener('scroll',(e)=>{
            if(scrollY >= window.innerHeight){
                scroll.value = true;
            }else{
                scroll.value = false;
            }
        });
        onMounted(()=>{
            menu.value.querySelectorAll('li').forEach((dom,index)=>{
                dom.addEventListener('click',(e)=>{
                    clearInterval(timer);
                    open.value = false;
                    liActive.value = index;
                    nowMove = window.scrollY;
                    moveFn(e,index);
                })
            })
        })
        const callMoveFn = (index)=>{
            clearInterval(timer);
            nowMove = window.scrollY;
            moveFn(null,index);
        }
        function moveFn(e,index){
            let top = props.domArr.data[index].offsetTop;
            timer = setInterval(()=>{
                if(window.scrollY <= top){
                    nowMove += 65;
                    window.scrollTo(0,nowMove);
                    // last設定出來解決最後一個會跳的問題
                    let last = ((window.screen.height - (props.domArr.data[props.domArr.data.length-1].offsetHeight)) - props.domArr.data[props.domArr.data.length-1].offsetTop);
                    if(window.scrollY >= top || window.scrollY >= Math.abs(last)){
                        clearInterval(timer);
                        window.scrollTo(0,top);
                    }
                }else{
                    nowMove -= 65;
                    window.scrollTo(0,nowMove);
                }
            },5)
        }
        return {open,openHandler,scroll,menu,liActive,callMoveFn,reload}
    }
}
</script>

<template>
    <header class="main_header">
        <a href="javascript:;" @click="reload">
            <h1>
                <img src="../assets/pic/logo-inverse-169x42.png" alt="logo">
                <span class="sr_only">SPECTRUM</span>
            </h1>
        </a>
        <a href="javascript:;" :class="['btn',{scroll : scroll}]" @click="openHandler">
            <div :class="['line','line1',{open : open}]"></div>
            <div :class="['line','line2',{open : open}]"></div>
            <div :class="['line','line3',{open : open}]"></div>
            <!-- open開關要做 -->
        </a>
        <ul :class="[{scroll : scroll},{active : open}]" ref="menu">
            <li :class="{active:liActive == 0}">
                <a href="javascript:;">Home</a>
            </li>
            <li :class="{active:liActive == 1}">
                <a href="javascript:;">About</a>
            </li>
            <li :class="{active:liActive == 2}">
                <a href="javascript:;">Team</a>
            </li>
            <li :class="{active:liActive == 3}">
                <a href="javascript:;">Portfolio</a>
            </li>
            <li :class="{active:liActive == 4}">
                <a href="javascript:;">Contacts</a>
            </li>
            <li :class="['phone',{active:liActive == 5}]">
                <a href="javascript:;">
                    <i class="fa fa-mobile" aria-hidden="true"></i>
                     1-300-123-1234
                </a>
            </li>
        </ul>
        <div :class="['cotrol_btn',{active:open}]" @click="openHandler"></div>
        <div :class="['backTop',{active : scroll}]" @click="callMoveFn(0)">
            <i class="fa-solid fa-angle-up"></i>
        </div>
    </header>
</template>

<style scoped>
    .main_header{
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        background-color: var(--bac_black);
        box-shadow: 1px 3px 5px 5px #0005;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 10;
    }
    .main_header h1{
        margin-right: 5vw;
        padding: 8px 10px;
        position: relative;
        z-index: 8;
    }
    .btn{
        width: 30px;        
        height: 30px;
        display: flex;
        align-items: center;
        position: relative;
        z-index: 8;
    }
    .btn .line{
        width: 30px;
        height: 1.5px;
        position: absolute;
        background-color: #fff;
        transition: .3s ease-in-out;
    }
    .btn .line1{
        transform: translateY(-8px);
    }
    .btn .line3{
        transform: translateY(8px);
    }
    .btn .line2.open{
        opacity: 0;
    }
    .btn .line1.open{
        transform: rotate(45deg);
    }
    .btn .line3.open{
        transform: rotate(-45deg);
    }
    ul{
        padding-top: 15px;
        width: 250px;
        height: 100vh;
        position: absolute;
        box-shadow: 1px 1px 2px 2px #0005;
        transform: translate(-120%);
        transition: top .3s;
        background-color: var(--bac_black);
        z-index: 25;
    }
    ul.active {
        top: 58px;
        transform: translate(0%);
    }
    ul li a{
        padding: 15px 10px;
        display: block;
        color: #666;
        transition: color .3s,background-color .3s;
    }
    ul li.active a{
        color: #fff;
        background-color: var(--bac_brown);
    }
    ul li:hover a{
        color: #fff;
        background-color: var(--bac_brown);
    }
    .phone a{
        font-size: 20px;
    }
    .backTop{
        width: 45px;
        height: 45px;
        position: fixed;
        right: 35px;
        bottom: 35px;
        line-height: 49px;
        font-size: 25px;
        text-align: center;
        color: #fff;
        background-color: var(--bac_brown);
        opacity: 0;
        z-index: 10;
        cursor: pointer;
        pointer-events: none;
        transition: opacity .3s;
    }
    .backTop.active{
        opacity: 1;
        pointer-events: unset;
    }
    .cotrol_btn{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: -200%;
        right: 0;
        bottom: 0;
        background-color: #0005;
        opacity: 0;
        z-index: 5;
    }
    .cotrol_btn.active{
        left: 0;
        opacity: 1;
    }
    @media screen and ( min-width: 1200px){
        /* js滾輪超過高度還要處理 */
        .main_header{
            padding: 20px 0 0 10px;
            width: 30%;
            box-shadow: 0 0 0 0 transparent;
            position: absolute;
            background-color: transparent;
        }        
        ul{
            padding: 20px 20px;
            width: 650px;
            height: 80px;
            top: -250%;
            right: -1508px;
            display: flex;
            align-items: center;
            background-color: #fff;
            transition: top .3s;
        }
        
        ul.active{
            top: 0;
            right: -680px;
        }        
        .btn.scroll{
            padding: 10px;
            position: fixed;
            left: 50px;
            background-color: #000;
        }
        ul.scroll{
            position: fixed;
            top: -250%;
            left: 50%; 
            transform: translate(-50%);
            transition: top .6s ease;
        }
        ul.scroll.active{
            top: 0;
        }
        ul li{
            padding: 0 10px;
        }
        ul li.active a{
            color: var(--bac_brown);
            background-color: transparent;
        }
        ul li a{
            color: #000;
            font-weight: 600;
        }
        ul li:hover a{
            color: var(--bac_brown);
            background-color: transparent;
        }
        .fa-mobile{
            color: var(--color_gray);
        }
        .btn{
            transform: rotatey(180deg);
        }
        .btn .line1{
            width: 0;
        }
        .btn .line3{
            width: 15px;
        }
        .btn:hover .line1{
            width: 30px;
        }
        .btn:hover .line3{
            width: 30px;
        }
        /* 點擊後不要改長度 */
        .btn .line1.open{
            width: 30px;
        }
        .btn .line3.open{
            width: 30px;
        }
        
        .cotrol_btn.active{
            left: -200%;
            opacity: 0;
        }
    }
</style>
