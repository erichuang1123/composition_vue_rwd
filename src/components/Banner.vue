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
            <div class="banner_wrap wrap1">     
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
            <div class="banner_wrap wrap2">
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
        width: 100%;
        height: 100%;
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
    @media screen and ( min-width: 576px){
        .section_banner{
            padding: 0;
        }
        .section_banner .container{
            display: flex;
        }
        .wrap1{
            padding: 50px 0 0;
            width: 40%;
        }
        .wrap2{
            width: 60%;
        }
        .contact{
            width: 110px;
            text-align: center;
        }
        .control_btn{
            padding: 30px 0;
        }
        .banner_wrap h2,
        .banner_wrap p{
            padding: 0 15px;
        }
        .pic{
            height: 300px;
        }
        .banner_wrap ul{
            flex-wrap: wrap;
        }
        .banner_wrap ul li{
            margin-bottom: 10px;
        }
        .banner_footer{
            left: 69%;
        }
    }
    @media screen and ( min-width: 768px){
        .wrap1{
            position: relative;
        }
        .wrap1::before{
            content: '';
            width: 200px;
            height: 100%;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            border-left: 1px solid #333333;
            border-right: 1px solid #333333;
            z-index: 1;
        }
        .wrap1::after{
            content: '';
            width: 1px;
            height: 100%;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            background-color: #333333;
            z-index: 1;
        }
        .banner_wrap h2,
        .banner_wrap p{
            padding: 0 30px;
            text-align: left;
            position: relative;
            z-index: 2;
        }
        .banner_wrap h2{
            font-size: 33px;
        }
        .banner_wrap p{
            margin-bottom: 35px;
            font-size: 20px;
        }
        .pic{
            height: 330px;
        }
        .contact{
            margin: 0 0 40px 30px;
            transform: translate(0);
            position: relative;
            z-index: 2;
        }   
        .banner_wrap ul{
            padding: 30px 0;
        }
        .banner_footer{
            bottom: 5px;
            font-size: 30px;
        }
        .control_btn{
            position: relative;
            z-index: 2;
        }
    }
    @media screen and ( min-width: 992px){
        .wrap1{
            width: 30%;
            padding: 100px 0px 100px;
            position: relative;
        }
        .wrap1 h2{
            margin-bottom: 30px;
            font-size: 40px;
        } 
        h2::before{
            content: '';
            position: absolute;
            top: 350px;
            left: 0;
            width: 100%;
            height: 100px;
            background-color: #313131;
        }
        .wrap1 p{
            /* margin-bottom: 20px; */
            font-size: 18px;
            margin-left: 40px;
        }
        .contact{
            padding: 15px 20px;
        }
        .wrap1 .control_btn{
            padding: 15px 10px;
            position: absolute;
            left: 120px;
            bottom: 60px;
            background-color: var(--bac_brown);
        }
       
        .wrap2{
            width: 70%;
        }
        .wrap2 .pic{
            height: 450px;
        }
        .banner_footer{
            top: 87%;
            left: 42%;
            font-size: 38px;
        }
        .wrap2 ul{
            padding: 0;
            height: 103px;
            justify-content: flex-end;
            align-items: center;
        }
        .wrap2 ul li{
            margin-bottom: 0;
        }
    }
</style>