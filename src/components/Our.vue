<script>
import { fab } from '@fortawesome/free-brands-svg-icons'
import { reactive, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { useScrollAddClass} from '@/composition-api/useScrollAddClass'
export default {
    setup(props,context){
        const dataArr = reactive({data : [
            {
                src : require('../assets/pic/team-1-290x284.jpg'),
                imgName : 'MARY SCOTT',
                content : 'Lead Interior Designer',
                opacityName : 'Mary',
                num_md : 0,
            },
            {
                src : require('../assets/pic/team-2-290x284.jpg'),
                imgName : 'JOHN BALMER',
                content : 'Senior Architect',
                opacityName : 'JOHN',
                num_md : 0,
            },
            {
                src : require('../assets/pic/team-3-290x284.jpg'),
                imgName : 'ANN SMITH',
                content : 'Exterior & Landscape Designer',
                opacityName : 'ANN',
                num_md : 1,
            },
            {
                src : require('../assets/pic/team-4-290x284.jpg'),
                imgName : 'KATE MCMILLAN',
                content : 'Project Manager',
                opacityName : 'KATE',
                num_md : 1,
            }
        ]})
        const active = ref(0);
        const open = ref(undefined);
        const section = ref(null);
        const clickFn = (number)=>{
            active.value = number;
        }
        onMounted(()=>{
            window.addEventListener('scroll',()=>{
                if(open.value == undefined){
                    open.value = useScrollAddClass(section);
                }
            })
            context.emit('our',section)
        })
        return {dataArr,active,clickFn,section,open}
    }
}
</script>

<template>
    <section :class="['section','section_our',{active:open}]" ref="section">
        <div class="container">
            <div class="out_title">
                <h2>OUR TEAM</h2>
                <p>PEOPLE BEHIND OUR SUCCESS</p>
            </div>
            <div class="our_wrap">
                <div :class="[
                             'our_item',
                             { active : active == index},
                             { active1 : active == dataArr.data[index].num_md},
                             { next : active == 1}
                             ]" 
                     v-for="(item,index) in dataArr.data">
                    <div class="pic">
                        <img :src="item.src" alt="">
                        <a href="javascript:;">{{item.imgName}}</a>
                    </div>
                    <div class="txt">
                        <p>{{item.content}}</p>
                        <div class="icon_link">
                            <div class="name">{{item.opacityName}}</div>
                            <a href="javascript:;" class="icon fb">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="javascript:;" class="icon ig">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="javascript:;" class="icon yt">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="our_page">
                <a href="javascript:;" :class="['page',{active : active == 0}]" @click="clickFn(0)"></a>
                <a href="javascript:;" :class="['page',{active : active == 1}]" @click="clickFn(1)"></a>
                <a href="javascript:;" :class="['page',{active : active == 2}]" @click="clickFn(2)"></a>
                <a href="javascript:;" :class="['page',{active : active == 3}]" @click="clickFn(3)"></a>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .section_our{
        padding: 30px 10px;   
        background-color: #F5F5F5;
    }
    .out_title{
        text-align: center;
    }
    .out_title h2{
        margin-bottom: 20px;
        font-size: 28px;
        font-weight: 900;
    }
    .out_title p{
        margin-bottom: 20px;
        color: var(--bac_brown);
        font-weight: 900;
    }
    .our_wrap{
        margin-bottom: 28px;
        height: 70vh;
        display: flex;
        position: relative;
    }

    /* js動畫 */
    .our_item{
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        flex-shrink: 0;
        opacity: 0;
        transition: opacity .3s;
    }
    .our_item.active{
        opacity: 1;
    }
    .our_item .pic{
        margin: 0 auto;
        width: 300px;
    }
    .our_item .pic a{
        padding: 10px 5px;
        width: 300px;
        display: inline-block;
        color: #000;
        background-color: #fff;
        font-weight: 700;
        transition: color .3s;
    }
    .our_item .pic a:hover{
        color: var(--bac_brown);
    }
    .our_item .txt{
        margin: 0 auto;
        padding: 8px 10px;
        width: 280px;
    }
    .our_item .txt p{
        margin-bottom: 25px;
        color: var(--bac_brown);
        font-weight: 600;
    }
    .icon_link{
        display: flex;
        align-items: center;
        position: relative;
    }
    .icon_link .name{
        position: absolute;
        font-size: 30px;
        color: #aaa5;
        font-weight: 900;
    }
    .icon_link .name::before{
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 50px;
        height: 1px;
        background-color: #000;
    }
    .icon_link .icon{
        margin-left: 18px;
        font-size: 20px;
        color: #626262;
        transition: color .3s;
        position: relative;
        z-index: 3;
    }
    .icon_link .fb{
        margin-left: 100px;
    }
    .icon_link .icon:hover{
        color: var(--bac_brown);
    }
    .our_page{
        display: flex;
        justify-content: center;
    }
    .our_page .page{
        margin: 0 8px;
        width: 12px;
        height: 13px;
        background-color: #aaa;
        border-radius: 50%;
        transition: background-color .3s;
    }
    .our_page .page.active{
        background-color: var(--bac_brown);
    }
    @media screen and ( min-width: 576px){
        .our_wrap {
            height: 50vh;
        }
        .our_item{
            padding: 0 10px;
        }
        .our_item:nth-child(1),
        .our_item:nth-child(2){
            opacity: 1;
        }
        .our_item:nth-child(1),
        .our_item:nth-child(3){
            margin-left: -40vw;
        }
        .our_item:nth-child(2),
        .our_item:nth-child(4){
            margin-left: 46vw;
        }
        .our_item.active{
            opacity: 0;
        }
        .our_item.active1{
            opacity: 1;
        }
        .our_item .pic{
            width: 250px;
        }
        .our_item .txt{
            padding: 0;
            width: 250px;
        }
        .our_item .pic a{
            width: 240px;
        }
        .our_page .page:nth-of-type(3),
        .our_page .page:nth-of-type(4){
            display: none;
        }
    }
    @media screen and ( min-width: 768px){
        .container{
            margin: 0 auto;
        }
        .our_item{
            opacity: 1;
            transition: transform .3s ease-in-out;
        }
        .our_item:nth-child(1),
        .our_item:nth-child(2),
        .our_item:nth-child(3){
            opacity: 1;
        }
        .our_item:nth-child(1){
            margin-left: -65vw;
        }
        .our_item:nth-child(2){
            margin-left: 0;
        }
        .our_item:nth-child(3){
            margin-left: 63.5vw;
        }
        .our_item:nth-child(4){
            margin-left: -130vw;
        }
        .our_item.next{
            transform: translateX(32.5vw);
        }
    }
    @media screen and ( min-width: 992px){        
        .section_our{
            padding: 90px 20px;
        }
        .out_title h2{
            margin-bottom: 30px;
        }
        .out_title p{
            margin-bottom: 60px;
        }
        .our_wrap{
            margin-bottom: 60px;
        }
    }
    @media screen and ( min-width: 1200px){
        .section_our{
            padding: 80px 55px;   
        }
        .our_wrap{
            height: auto;
            justify-content: space-between;
            overflow: hidden;
        }
        .section_our .our_wrap .our_item{
            margin-left: 0;
            position: initial;
        }
        .our_item.next{
            transform: translateX(0);
        }
        .our_item .pic a{
            padding: 15px 5;
            font-size: 18px;
        }
        .our_item .pic{
            margin-bottom: 20px;
        }
        .our_item .txt{
            padding: 0 0 30px;
        }
        .txt p{
            font-size: 18px;
        }
        .txt .name{
            font-size: 55px;
        }
        .icon_link .fb{
            margin-left: 120px;
        }
        .our_page{
            display: none;
        }
    }        
</style>