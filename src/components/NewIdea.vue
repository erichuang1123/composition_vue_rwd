<script>
export default {

}
</script>

<template>
    <section class="section section_findNew">
        <div class="container">
            <div class="find_title">
                <h2>FIND NEW IDEAS AND INSPIRATION IN OUR BLOG</h2>
                <p>LATEST BLOG POSTS</p>
            </div>
            <div class="find_wrap">
                <div class="find_item">
                    <a href="javascript:;">
                        <h3>HOW ART INFLUENCES MODERN ARCHITECTURE</h3>
                    </a>
                    <div class="find_date">JUNE 19, 2018</div>
                    <div class="pic">
                        <img src="../assets/pic/post-1-270x182.jpg" alt="">
                    </div>
                    <p>Looking through our recent, impactful projects, we set out to ask the designers about their opinion...</p>
                </div>
                <div class="find_item">
                    <a href="javascript:;">
                        <h3>NEW TRENDS IN ARCHITECTURE: OVERVIEW</h3>
                    </a>
                    <div class="find_date">MAY 30, 2018</div>
                    <div class="pic">
                        <img src="../assets/pic/post-2-270x182.jpg" alt="">
                    </div>
                    <p>Architecture is constantly evolving based on changes in our culture, society and the environment. While...</p>
                </div>
                <div class="find_item">
                    <a href="javascript:;">
                        <h3>WORKING WITH AN ARCHITECT: 10 USEFUL TIPS</h3>
                    </a>
                    <div class="find_date">APRIL 15, 2018</div>
                    <div class="pic">
                        <img src="../assets/pic/post-3-270x182.jpg" alt="">
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
    }
    .section_findNew::before{
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 1px;
        height: 100%;
        background-color: #EFEFEF;
        transform: translateX(-50%);
        box-shadow: 170px 0 0px 0px #EFEFEF,
                    -170px 0 0px 0px #EFEFEF;
        z-index: 1;
    }
    .section_findNew .container{
        position: relative;
        z-index: 2;
    }
    .find_title h2{
        margin-bottom: 15px;
        text-align: center;
        font-size: 30px;
        line-height: 1.2;
        font-weight: 600;
    }
    .find_title p{
        margin-bottom: 20px;
        text-align: center;
        color: var(--bac_brown);
    }
    .find_item{
        margin: 0 auto;
        width: 270px;
        display: flex;
        flex-direction: column;
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
        margin-bottom: 10px;
        text-align: center;
        color: var(--color_gray);
        font-size: 25px;
        font-weight: 600;
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
    }
</style>