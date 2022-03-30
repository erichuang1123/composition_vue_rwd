<script>
import { fab } from '@fortawesome/free-brands-svg-icons'
import { reactive } from '@vue/reactivity'
export default {
    setup(){
        const dataArr = reactive({data : [
            {
                src : '../assets/pic/team-1-290x284.jpg',
                imgName : 'MARY SCOTT',
                content : 'Lead Interior Designer',
                opacityName : 'Mary'
            },
            {
                src : '../assets/pic/team-2-290x284.jpg',
                imgName : 'JOHN BALMER',
                content : 'Senior Architect',
                opacityName : 'JOHN'
            },
            {
                src : '../assets/pic/team-3-290x284.jpg',
                imgName : 'ANN SMITH',
                content : 'Exterior & Landscape Designer',
                opacityName : 'ANN'
            },
            {
                src : '../assets/pic/team-4-290x284.jpg',
                imgName : 'KATE MCMILLAN',
                content : 'Project Manager',
                opacityName : 'KATE'
            }
        ]})
    }
}
</script>

<template>
    <section class="section section_our">
        <div class="container">
            <div class="out_title">
                <h2>OUR TEAM</h2>
                <p>PEOPLE BEHIND OUR SUCCESS</p>
            </div>
            <div class="our_wrap">
                <div class="our_item">
                    <div class="pic">
                        <img src="../assets/pic/team-1-290x284.jpg" alt="">
                        <a href="javascript:;">MARY SCOTT</a>
                    </div>
                    <div class="txt">
                        <p>Lead Interior Designer</p>
                        <div class="icon_link">
                            <div class="name">MARY</div>
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
                <a href="javascript:;" class="page"></a>
                <a href="javascript:;" class="page"></a>
                <a href="javascript:;" class="page"></a>
                <a href="javascript:;" class="page"></a>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .section_our{
        padding: 30px 0;   
        background-color: #F5F5F5;
    }
    .out_title{
        text-align: center;
    }
    .out_title h2{
        margin-bottom: 20px;
        font-size: 28px;
        font-weight: 600;
    }
    .out_title p{
        margin-bottom: 20px;
        color: var(--bac_brown);
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
        font-weight: 600;
        background-color: #fff;
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
        margin-bottom: 15px;
        color: var(--bac_brown);
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
        color: #999;
        transition: color .3s;
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
        margin: 0 5px;
        width: 10px;
        height: 10px;
        background-color: #aaa;
        border-radius: 50%;
        transition: background-color .3s;
    }
    .our_page .page.active{
        background-color: var(--bac_brown);
    }
</style>