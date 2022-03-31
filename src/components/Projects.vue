<script>
import { reactive } from '@vue/reactivity'
export default {
    setup(){
        const arrData = reactive({data : [
            {
                date : 'MARCH 15, 2018',
                datep : 'ARCHITECTURE',
                title : '3119 MULBERRY LN, NEWCASTLE, OK',
                content : 'We have worked on this project for three months to completely extend and redesign the old 2-storey house.',
            },
            {
                date : 'JUNE 19, 2018',
                datep : 'EXTERIOR DESIGN',
                title : '4367 LIBERTY ST, IRVING, TX',
                content : 'Our team of exterior designers and architects integrated the latest innovations in this residential project.',
            },
            {
                date : 'JANUARY 10, 2018',
                datep : 'LANDSCAPE DESIGN',
                title : '2560 RUSSELL ST, BOSTON, MA',
                content : 'As one of our first projects in 2018, this house features unique landscape design solutions and work on exterior.',
            }
        ]})
    }
}
</script>

<template>
    <section class="section section_project">
        <div class="container">
            <div class="project_title">
                <h2>
                    <span>PRO</span>JECTS
                </h2>
                <p>Below you can take a look at our featured and recent projects that have been numerously awarded for our unique architectural approach.</p>
            </div>
            <div class="project_item">
                <div class="txt">
                    <div class="date">
                        <p>MARCH 15, 2018</p>
                        <p>ARCHITECTURE</p>
                    </div>
                    <h3>3119 MULBERRY LN, NEWCASTLE, OK</h3>
                    <div class="content">We have worked on this project for three months to completely extend and redesign the old 2-storey house.</div>
                </div>
                <div class="pic">
                    <img src="../assets/pic/project-1-775x524.jpg" alt="">
                    <a href="javascript:;" class="search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                </div>
                <div class="rwd_control">
                    <a href="javascript:;" class="prev">
                        <i class="fa-solid fa-angle-left"></i>
                    </a>
                    <a href="javascript:;" class="next">
                        <i class="fa-solid fa-angle-right"></i>
                    </a>
                </div>    
                <div class="rwd_md our_page">
                    <a href="javascript:;" class="page"></a>
                    <a href="javascript:;" class="page"></a>
                    <a href="javascript:;" class="page"></a>
                </div>
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
        font-weight: 600;
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
        order: 3;
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
        /* rwd還要再控制 */
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
        margin: 0 10px 10px;
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
    /* .project_item .date div:first-of-type{}
    .project_item .date div:last-of-type{} */
    .project_item .txt h3{
        margin-bottom: 15px;
        font-size: 25px;
        text-align: center;
        color: var(--bac_brown);
        font-weight: 600;
    }
    .project_item .txt .content{
        line-height: 1.1;
        text-align: center;
        color: #6A6A6A;
    }
    @media screen and ( min-width: 576px){
        .section_project{
            padding: 40px 20px;
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
        .project_item{
            flex-direction: row;
            align-items: center;
        }
        .project_item .txt{
            width: 47%;
            height: 70%;
            margin: 0;
            order: 1;
            z-index: 2;
        }
        .project_item .txt h3{
            text-align: left;
        }
        .project_item .txt p{
            font-size: 13px;
            font-weight: 600;
        }
        .project_item .txt .content{
            text-align: left;
        }
        .project_item .txt .date{
            justify-content: flex-start;
        }
        .project_item .txt .date p:first-of-type{
            margin-left: 0;
        }
        .project_item .pic{
            margin-left: -15%;
            margin-right: 30px;
            width: 80%;
            padding: 0;
            order: 2;
            z-index: 1;
        }
        .rwd_md{
            display: none;
        }
        .rwd_control{
            width: 100px;
            display: block;
            order: 3;
        }
        .rwd_control .prev,
        .rwd_control .next{
            margin: 20px auto;
            width: 40px;
            height: 40px;
            line-height: 42px;
            display: block;
            color: #000;
            border: 1px solid #aaa;
            transition: color .3s;
        }
        .rwd_control .prev:hover,
        .rwd_control .next:hover{
            color: var(--bac_brown);
        }
    }
</style>