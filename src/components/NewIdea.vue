<script>
import { useScrollAddClass} from '@/composition-api/useScrollAddClass'
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
export default {
    setup(){
        const open = ref(undefined);
        const section = ref(null);
         onMounted(()=>{
            window.addEventListener('scroll',()=>{
                if(open.value == undefined){
                    open.value = useScrollAddClass(section);
                }
            })
        })
        return {section , open}
    }

}
</script>

<template>
    <section :class="['section','section_findNew',{active:open}]" ref="section">
        <div class="container">
            <div class="find_title">
                <h2><span>FIND NEW IDEAS AND</span> INSPIRATION IN OUR BLOG</h2>
                <p>LATEST BLOG POSTS</p>
            </div>
            <div class="find_wrap">
                <div class="find_item">
                    <a href="javascript:;">
                        <h3>HOW ART INFLUENCES MODERN ARCHITECTURE</h3>
                    </a>
                    <div class="find_date">JUNE 19, 2018</div>
                    <div class="pic">
                        <img src="../assets/pic/post-1-270x182.jpg" alt="產品">
                    </div>
                    <p>Looking through our recent, impactful projects, we set out to ask the designers about their opinion...</p>
                </div>
                <div class="find_item">
                    <a href="javascript:;">
                        <h3>NEW TRENDS IN ARCHITECTURE: OVERVIEW</h3>
                    </a>
                    <div class="find_date">MAY 30, 2018</div>
                    <div class="pic">
                        <img src="../assets/pic/post-2-270x182.jpg" alt="產品">
                    </div>
                    <p>Architecture is constantly evolving based on changes in our culture, society and the environment. While...</p>
                </div>
                <div class="find_item">
                    <a href="javascript:;">
                        <h3>WORKING WITH AN ARCHITECT: 10 USEFUL TIPS</h3>
                    </a>
                    <div class="find_date">APRIL 15, 2018</div>
                    <div class="pic">
                        <img src="../assets/pic/post-3-270x182.jpg" alt="產品">
                    </div>
                    <p>A skilled architect will elevate the work you do to your home from the ordinary to the wonderful. Here’s...</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .section_findNew{
        padding: 60px 0;
        position: relative;
        overflow: hidden;
    }
    .section_findNew::before{
        content: '';
        width: 250px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        border-left: 1px solid #aaa5;
        border-right: 1px solid #aaa5;
        z-index: 1;
    }
    .section_findNew::after{
        content: '';
        width: 1px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: #aaa5;
        z-index: 1;
    }
    .section_findNew .container{
        position: relative;
        z-index: 2;
    }
    .find_title{
        position: relative;
        left: 50px;
        opacity: 0;
        transition: left .3s,opacity .3s;
    }
    .section_findNew.active .find_title{
        left: 0;
        opacity: 1;
    }
    .find_title h2{
        margin-bottom: 15px;
        text-align: center;
        font-size: 30px;
        line-height: 1.5;
        font-weight: 900;
    }
    .find_title p{
        margin-bottom: 20px;
        text-align: center;
        color: var(--bac_brown);
        font-weight: 900;
    }
    .find_wrap{
        position: relative;
        left: -50px;
        opacity: 0;
        transition: left .3s .3s,opacity .3s .3s;
    }
    .section_findNew.active .find_wrap{
        left: 0;
        opacity: 1;
    }
    .find_item{
        margin: 0 auto;
        width: 270px;
        display: flex;
        flex-direction: column;
    }
    .find_item h3{
        line-height: 1.4;
        margin-bottom: 10px;
        font-weight: 900;
    }
    .find_item a{
        margin-bottom: 12px;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        line-height: 1.2;
        order: 3;
        color: #000;
        transition: color .3s;
    }
    .find_item a:hover{
        color: var(--bac_brown);
    }
    .find_item .find_date{
        margin-bottom: 30px;
        text-align: center;
        color: var(--color_gray);
        font-size: 25px;
        font-weight: 900;
        order: 1;
    }
    .find_item .pic{
        margin: 0 auto 15px;
        order: 2;
    }
    .find_item p{
        margin-bottom: 40px;
        order: 4;
        text-align: center;
        color: var(--color_gray);
        line-height: 1.4;
    }
    @media screen and ( min-width: 576px){
        .section_findNew::before{
            width: 350px;
        }
        .find_title h2{
            padding: 0 30px;
        }
        .find_wrap{
            display: flex;
            flex-wrap: wrap;
        }
        .find_item{
            width: 45%;
        }
    }
    @media screen and ( min-width: 768px){
        .section_findNew::before{
            width: 450px;
        }
        .section_findNew{
            padding: 80px 30px;
        }
        .find_title h2 span{
            display: block;
        }
        .find_item{
            width: 30%;
        }
        .find_item a{
            text-align: left;
            font-size: 19px;
            font-weight: 600;
        }
        .find_item .find_date{
            text-align: left;
        }
        .find_item p{
            text-align: left;
        }
    }
    @media screen and ( min-width: 992px){
        .find_title h2{
            margin-bottom: 30px;
        }
        .find_title p{
            margin-bottom: 40px;
        }
        .find_item .pic{
            margin: 0 0 20px 0;
        }
    }
    @media screen and ( min-width: 1200px){
        .find_item{
            width: 24%;
        }
        .find_item h3{
            font-size: 1.2vw;
        }
    }
</style>