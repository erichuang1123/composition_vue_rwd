<script>
import { useBacMove } from '@/composition-api/index.js'
import { onMounted, ref } from '@vue/runtime-core';
import { useScrollAddClass} from '@/composition-api/useScrollAddClass'
export default {
    setup(){
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
        return { section , moveX, moveY , open}
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
                <div class="ourFrom_from">
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
    .section_ourFrom{
        padding: 50px 0;
        position: relative;
    }
    .rwd_wrap{
        display: none;
    }
    .ourFrom_title{
        text-align: center;
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
        color: #fff;
        background-color: var(--bac_brown);
        border: none;
        transition: background-color .3s;
    }
    .ourFrom_from a:hover{
        background-color: transparent;
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