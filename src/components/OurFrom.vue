<script>
import { useBacMove } from '@/composition-api/index.js'
import { onMounted, ref } from '@vue/runtime-core';
import { useScrollAddClass} from '@/composition-api/useScrollAddClass'
import { addSubmitBtn } from '@/composition-api/addSubmitBtn'
export default {
    setup(){
        const {showBlock,submitObj,submitHandler} = addSubmitBtn();
        const section = ref(null);  
        const moveX = ref(0);
        const moveY = ref(0);
        const open = ref(undefined);
        onMounted(()=>{
            section.value.addEventListener('mousemove',(e)=>{
                const { x, y } = useBacMove(section,e);
                moveX.value = (x.value + (window.innerWidth / 7)) + 'px';
                moveY.value = (y.value + (window.innerWidth / 15))+ 'px';
            })
        })
        onMounted(()=>{
            window.addEventListener('scroll',()=>{
                if(open.value == undefined){
                    open.value = useScrollAddClass(section);
                }
            })
        })
        return { section , moveX, moveY , open , showBlock , submitObj , submitHandler}
    }
}
</script>

<template>
    <section :class="['section','section_ourFrom',{active:open}]" ref="section">
        <div class="container">
            <div class="rwd_wrap">
                <img src="../assets/pic/index-6-538x694.png" alt="">
            </div>
           <div class="our_wrap">
                <div class="ourFrom_title">
                    <h2>
                        GET IN TOUCH WITH<br>
                        OUR TEAM
                    </h2>
                    <p>LET’S WORK TOGETHER!</p>
                </div>
                <div :class="['ourFrom_from',{clear : !showBlock}]">
                    <input type="text" placeholder="Name" v-model="submitObj.name">
                    <input type="email" placeholder="Email" v-model="submitObj.email">
                    <input type="tel" placeholder="Phone" v-model="submitObj.phone">
                    <a href="javascript:;" @click="submitHandler">
                        SUBMIT
                        <span class="moveBtn moveBtn1"></span>
                        <span class="moveBtn moveBtn2"></span>
                        <span class="moveBtn moveBtn3"></span>
                        <span class="moveBtn moveBtn4"></span>
                    </a>
                </div>       
            </div>     
        </div>
    </section>
</template>

<style scoped>
    .section_ourFrom{
        padding: 50px 0;
        position: relative;
        overflow: hidden;
    }
    .rwd_wrap{
        display: none;
    }
    .ourFrom_title{
        text-align: center;
        left: -50px;
        opacity: 0;
        transition: left .5s,opacity .5s;
    }
    .section_ourFrom.active .ourFrom_title{
        left: 0;
        opacity: 1;
    }
    .ourFrom_title h2{
        margin-bottom: 15px;
        font-size: 25px;
        font-weight: 900;
        line-height: 1.2;
    }
    .ourFrom_title p{
        margin-bottom: 25px;
        color: var(--bac_brown);
        font-size: 18px;
        font-weight: 800;
    }
    .ourFrom_from{
        margin: 0 auto;
        padding: 40px 35px 40px;
        width: 75%;
        background-color: var(--bac_black);
        color: #fff;
        border-radius: 10px;
        left: 50px;
        opacity: 0;
        transition: left .5s .5s,opacity .5s .5s;
    }
    .section_ourFrom.active .ourFrom_from{
        left: 0;
        opacity: 1;
    }
    .ourFrom_from input{
        margin-top: 5px;
        margin-bottom: 35px;
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
    .ourFrom_from input:last-of-type{
        margin-bottom: 55px;
    }
    .ourFrom_from input::placeholder{
        color: #fff;
        transition: opacity .3s;
    }
    .ourFrom_from input:focus::placeholder{
        opacity: 0;
    }
    .ourFrom_from a{
        padding: 10px 30px;
        position: relative;
        color: #fff;
        background-color: var(--bac_brown);
        transition: background-color .3s;
    }
    .ourFrom_from a:hover{
        background-color: transparent;
    }
    .ourFrom_from a:hover .moveBtn1{
        animation: move1 1.5s infinite;
    }
    .ourFrom_from a:hover .moveBtn2{
        animation: move2 1.5s infinite;
    }
    .ourFrom_from a:hover .moveBtn3{
        animation: move3 1.5s infinite;
    }
    .ourFrom_from a:hover .moveBtn4{
        animation: move4 1.5s infinite;
    }
    .section_ourFrom .ourFrom_from.clear{
        opacity: 0;
    }
    @media screen and ( min-width: 768px){
        .section_ourFrom{
            --xmove : v-bind(moveX);
            --ymove : v-bind(moveY);
            padding: 40px 50px;
            background-image: url('../assets/pic/index-9-1047x531.jpg');
            background-repeat: no-repeat;
            background-size: 110%;
            background-position: var(--xmove) var(--ymove);
        }
        .ourFrom_title{
            margin: 0 auto;
            width: 500px;
        }        
        .ourFrom_title h2{
            text-align: left;
        }        
        .ourFrom_title p{
            text-align: left;
        }        
        .ourFrom_from{
            width: 430px;
        }
        .ourFrom_from input{
            margin-bottom: 50px;
        }
    }
    @media screen and ( min-width: 992px){
        .section_ourFrom{
            padding-top: 0;
            background-size: 80%;
        }
        .container{
            display: flex;
            justify-content: space-between;
        }
        .rwd_wrap{
            width: 48%;
            display: block;
        }
        .our_wrap{
            padding: 100px 0;
            width: 50%;
        }
        .our_wrap h2{
            margin-bottom: 30px;
            font-size: 32px;
        }
        .our_wrap p{
            margin-bottom: 35px;
        }
        .ourFrom_from{
            margin: 0;
            width: 380px;
            box-shadow: 7px 7px 20px 20px #aaa8;
        }
    }
    @media screen and ( min-width: 1200px){
        .ourFrom_title{
            margin: 0;
        }
        .our_wrap{
            margin-left: auto;
            width: 40%;
        }
    }
</style>