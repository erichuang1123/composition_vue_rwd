<script>
import { reactive } from '@vue/reactivity'
export default {
    setup(){
        const dataArr = reactive({data : [
            {
                url : '../assets/pic/slide-1-1339x729.jpg',
                li1 : '2750 DUFFY ST',
                li2 : '200 SQ. M.',
                li3 : '$ 240 000',
            },
            {
                url : '../assets/pic/slide-2-1339x729.jpg',
                li1 : '5032 HEWES AVE',
                li2 : '290 SQ. M.',
                li3 : '$ 390 000',
            },
            {
                url : '../assets/pic/slide-3-1339x729.jpg',
                li1 : '2239 WILMAR FARM RD',
                li2 : '350 SQ. M.',
                li3 : '$ 340 000',
            }
        ]})
        return {dataArr}
    }
}
</script>

<template>
    <section class="section section_banner">
        <div class="container">
            <div class="banner_wrap">     
                <h2>
                    DESIGNING<br>
                    &BUILDING
                </h2>
                <p>
                    MODERN ENRGY<br>
                    EFFICEINT HOURSES<br>
                    FROM 150 SQ.M.
                </p>
                <a class="contact" href="javascript:;">CONTACT US</a>
                <div class="control_btn">
                    <a href="javascript:;" class="prev">
                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                    </a>
                    <a href="javascript:;" class="next">
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div class="banner_wrap">
                <div class="pic">
                    <img src="../assets/pic/slide-1-1339x729.jpg" alt="">
                </div>
                <ul>
                    <li>2750 DUFFY ST</li>
                    <li>200 SQ. M.</li>
                    <li>$ 240 000</li>
                </ul>
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
        font-weight: 600;
        line-height: 1.1;
    }
    p{
        margin-bottom: 20px;
        font-size: 18px;
        text-align: center;
        line-height: 1.2;
        color: var(--bac_brown);
    }
    .contact{
        margin-left: 50%;
        margin-bottom: 40px;
        padding: 10px 18px;
        display: inline-block;
        border: 1px solid var(--bac_brown);
        transform: translate(-50%);
        color: #fff;
        font-weight: 600;
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
        line-height: 30px;
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
        height: 250px;
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
    .banner_footer{
        position: absolute;
        left: 50%;
        bottom: 5px;
        font-size: 20px;
        transform: translateX(-50%);
        opacity: .05;
    }
    /* @keyframes move1 {
	0% {
		height: calc(100% + 1px);
		bottom: -1px;
	}
	54% {
		height: 0;
		bottom: calc(100% + 1px);
	}
	55% {
		height: 0;
		bottom: -1px;
	}
	100% {
		height: calc(100% + 1px);
		bottom: -1px;
	} */
    /* } */
</style>