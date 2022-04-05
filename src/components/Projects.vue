<script>
import { reactive, ref } from '@vue/reactivity'
import { useScrollAddClass} from '@/composition-api/useScrollAddClass'
import { onMounted } from '@vue/runtime-core'
export default {
    setup(props,context){
        const arrData = reactive({data : [
            {
                date : 'MARCH 15, 2018',
                datep : 'ARCHITECTURE',
                title : '3119 MULBERRY LN, NEWCASTLE, OK',
                content : 'We have worked on this project for three months to completely extend and redesign the old 2-storey house.',
                src : require('../assets/pic/project-1-775x524.jpg'),
            },
            {
                date : 'JUNE 19, 2018',
                datep : 'EXTERIOR DESIGN',
                title : '4367 LIBERTY ST, IRVING, TX',
                content : 'Our team of exterior designers and architects integrated the latest innovations in this residential project.',
                src : require('../assets/pic/project-2-775x524.jpg'),
            },
            {
                date : 'JANUARY 10, 2018',
                datep : 'LANDSCAPE DESIGN',
                title : '2560 RUSSELL ST, BOSTON, MA',
                content : 'As one of our first projects in 2018, this house features unique landscape design solutions and work on exterior.',
                src : require('../assets/pic/project-3-775x524.jpg'),
            }
        ]})
        const index = ref(0);
        const prev = ref(2);
        const next = ref(1);
        const res = ref(0);
        const now = ref(0);
        const open = ref(undefined);
        const section = ref(null);
        function calculate(numReduce,numAdd){
            if(numReduce < 0){
                prev.value = arrData.data.length -1 ;
            }else{
                prev.value = numReduce;
            }
            if(numAdd > (arrData.data.length -1)){
                next.value = 0;
            }else{
                next.value = numAdd;
            }
        }
        function moveItem(){
            // 當現在在第三張切回第一張是要往左移動，一好之後原本在prev的會被移到next，所以是next要被消失
            if(res.value > index.value && (res.value-index.value) > 1){
                now.value = next.value;
            }else if(res.value < index.value && ((index.value - res.value) > 1)){
                now.value = prev.value;
            }else if(res.value < index.value){
                now.value = next.value;
            }else if(res.value > index.value){
                now.value = prev.value;
            }
            res.value = index.value;
        }
        const clickFn = (number) => {
            if(number > (arrData.data.length -1)){
                number = 0;
            }else if(number < 0){
                number = (arrData.data.length -1)
            }
            index.value = number;
            let numReduce = (number-1);
            let numAdd = (number+1);
            calculate(numReduce,numAdd);
            moveItem();
            // 利用計算出前一個後一個增加class名稱讓他有動畫
        }
        onMounted(()=>{
            window.addEventListener('scroll',()=>{
                if(open.value == undefined){
                    open.value = useScrollAddClass(section);
                }
            })
            context.emit('projects',section)
        })
        return {index,clickFn,arrData,prev,next,now,section,open}
    }
}
</script>

<template>
    <section :class="['section','section_project',{active:open}]" ref="section">
        <div class="container">
            <div class="project_title">
                <h2>
                    <span>PRO</span>JECTS
                </h2>
                <p>Below you can take a look at our featured and recent projects that have been numerously awarded for our unique architectural approach.</p>
            </div>
            <div class="project_wrap">
                <div 
                    :class="['project_item',
                            {active : index == num},
                            {prev : prev == num},
                            {next : next == num},
                            {now : now == num}
                            ]" 
                    v-for="(item,num) in arrData.data" 
                    :key="item.content"
                >
                    <div class="txt">
                        <div class="date">
                            <p>{{item.date}}</p>
                            <p>{{item.datep}}</p>
                        </div>
                        <h3>{{item.title}}</h3>
                        <div class="content">{{item.content}}</div>
                    </div>
                    <div class="pic">
                        <img :src="item.src" alt="">
                        <a href="javascript:;" class="search">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </a>
                    </div>
                </div>
                <div class="rwd_control">
                    <a href="javascript:;" class="prev" @click="clickFn(index-1)">
                        <i class="fa-solid fa-angle-left"></i>
                    </a>
                    <a href="javascript:;" class="next" @click="clickFn(index+1)">
                        <i class="fa-solid fa-angle-right"></i>
                    </a>
                </div>    
            </div>
            <div class="rwd_md our_page">
                <a href="javascript:;" :class="['page',{active : index == 0}]" @click="clickFn(0)"></a>
                <a href="javascript:;" :class="['page',{active : index == 1}]" @click="clickFn(1)"></a>
                <a href="javascript:;" :class="['page',{active : index == 2}]" @click="clickFn(2)"></a>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .section_project{
        padding: 40px 0;
        background-color: #F5F5F5;
    }
    .project_title{
        margin-bottom: 30px;
        padding-bottom: 5px;
        position: relative;
    }
    .project_title::before{
        content: '';
        width: 97%;
        height: 3px;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        background-color: var(--bac_brown);
    }
    .project_title h2{
        margin-bottom: 15px;
        text-align: center;
        font-size: 25px;
    }
    .project_title h2 span{
        font-weight: 900;
    }
    .project_title p{
        margin-bottom: 20px;
        text-align: center;
        line-height: 1.2;
        color: #666;
    }
    .project_item{
        display: flex;
        flex-direction: column;
    }
    .project_item .txt{
        order: 2;
    }
    .project_item .pic{
        order: 1;
    }
    .our_page{
        text-align: center;
        order: 3;
    }
    .rwd_md .page{
        transition: color .3s;
    }
    .rwd_md .page.active{
        color: var(--bac_grown);
    }
    .project_wrap{
        position: relative;
        display: flex;
        height: 560px;
    }
    .project_item{
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: opacity .3s;
    }
    .project_item.active{
        opacity: 1;
    }
    .rwd_control{
        position: absolute;
        top: 50%;
        right: -90px;
        transform: translateY(-50%);
    }
    .rwd_control .prev,
    .rwd_control .next{
        width: 30px;
        height: 30px;
        display: inline-block;
        line-height: 30px;
        text-align: center;
        font-size: 25px;
        border-radius: 50%;
        border: 1px solid #aaa;
        color: #666;
    }
    .rwd_control .prev,
    .rwd_control .next{
        display: none;
    }
    .project_item .pic{
        padding: 0 10px;
        position: relative;
    }
    .project_item .pic .search{
        width: 40px;
        height: 40px;
        line-height: 40px;
        position: absolute;
        right: 10px;
        bottom: 0;
        color: #fff;
        text-align: center;
        background-color: var(--bac_brown);
        transition: background-color .3s;
    }
    .project_item .search:hover{
        background-color: #000;
    }
    .project_item .txt{
        margin: 0 10px 30px;
        padding: 25px 20px;
        background-color: #282828;
    }
    .project_item .txt .date{
        display: flex;
        justify-content: center;
    }
    .project_item .txt .date p{
        margin: 0 10px 30px;
        color: #DDDDDD;
    }
    .project_item .txt .date p + p{
        position: relative;
    }
    .project_item .txt .date p + p::before{
        content: '|';
        position: absolute;
        top: -2px;
        left: -10px;
    }
    .project_item .txt h3{
        margin-bottom: 25px;
        font-size: 23px;
        text-align: center;
        color: var(--bac_brown);
        font-weight: 900;
        line-height: 1.5;
    }
    .project_item .txt .content{
        line-height: 1.7;
        text-align: center;
        color: #6A6A6A;
    }
    @media screen and ( min-width: 576px){
        .section_project{
            overflow: hidden;
            padding: 40px 20px;
        }
        .project_wrap{
            position: relative;
            display: flex;
            height: 80vh;
        }
        .project_item{
            width: 500px;
            left: 50%;
            opacity: 1;
            flex-shrink: 0;
            transform: translateX(-50%);
            transition: opacity .3s .3s;
            transition :transform 1.5s ease;
        }
        .project_item.prev{
            transform: translateX(-200%);
            opacity: .5;
        }
        .project_item.next{
            transform: translateX(150%);
            opacity: .5;
        }
        .project_item.prev.now{
            opacity: 0;
        }
        .project_item.next.now{
            opacity: 0;
        }
        .project_item.active{
            opacity: 1;
        }
    }
    @media screen and ( min-width: 768px){
        .project_title{
            display: flex;
            align-items: center;
        }
        .project_title::before{
            width: 100%;
            height: 4px;
        }
        .project_title h2{
            margin-right: 20px;
            padding: 10px 20px 10px 0;
            font-size: 40px;
        }
        .project_title p{
            padding: 0 35px;
            text-align: left;
        }
        .project_wrap{
            display: flex;
            height: 60vh;
        }
        .project_item{
            width: 600px;
            align-items: center;
            flex-direction: row;
            top : 0%;
            bottom: 0;
        }
        .project_item .txt{
            width: 47%;
            margin: 0;
            order: 1;
            z-index: 2;
        }
        .project_item .txt h3{
            margin-bottom: 10px;
            font-size: 20px;
            text-align: left;
        }
        .project_item .txt p{
            font-size: 13px;
            font-weight: 600;
        }
        .project_item .txt .content{
            text-align: left;
            line-height: 1.1;
        }
        .project_item .txt .date{
            justify-content: flex-start;
        }
        .project_item .txt .date p:first-of-type{
            margin-left: 0;
        }
        .project_item .pic{
            margin-left: -30%;
            margin-right: 30px;
            width: 80%;
            padding: 0;
            order: 2;
            z-index: 1;
        }
        .project_item .pic img{
            height: 100%;
        }
        .rwd_md{
            display: none;
        }
        .rwd_control{
            margin: auto;
            width: 100px;
            display: block;
            order: 3;
            right: 0;
        }
        .rwd_control .prev,
        .rwd_control .next{
            margin: 20px auto;
            width: 40px;
            height: 40px;
            line-height: 37px;
            display: block;
            color: #000;
            border: 1px solid #aaa;
            transition: color .3s;
        }
        .rwd_control .prev:hover,
        .rwd_control .next:hover{
            color: var(--bac_brown);
        }
        .project_item .pic .search{
            right: 0;
        }
    }
    @media screen and ( min-width: 992px){
        .project_title{
            margin-bottom: 80px;
        }
        .project_title h2{
            margin-bottom: 30px;
            font-size: 52px;
        }
        .project_item {
            width: 700px;
        }
        .project_item .txt{
            padding: 50px 20px;
        }
        .project_item .txt h3{
            font-size: 25px;
        }
        .rwd_control{
            right: 1.5vw;
        }
    }
    @media screen and ( min-width: 1200px){
        .section_project{
            padding: 100px 60px;
        }
        .project_title p{
            font-size: 19px;
        }
        .project_item {
            width: 900px;
        }
        .project_item .txt{
            padding: 70px 30px;
            width: 30%;
        }
        .rwd_control{
            right: 7vw;
        }
    }
</style>