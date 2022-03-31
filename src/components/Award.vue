<script>
export default {
    
}
</script>

<template>
    <section class="section section_award">
        <div class="container">
            <div class="award_wrap wrap1">
                <div class="award_title">
                    <h2>
                        AWRD-WINNING<br>
                        ARCHITECTURE COMPANY
                    </h2>
                    <p>WE DELIVER THE BEST SOLUTIONS</p>
                </div>
                <div class="pic">
                    <img src="../assets/pic/index-5-533x362.jpg" alt="">
                </div>
            </div>
            <div class="award_wrap wrap2">
                <div class="award_item">
                    <div class="award_tit">
                        <div class="number">7</div>
                        <p>YEARS</p>
                    </div>
                    <p class="content">We have been working in the industry since 2011.</p>
                </div>
                <div class="award_item">
                    <div class="award_tit">
                        <div class="number">54</div>
                        <p>PROJECTS</p>
                    </div>
                    <p class="content">To this day, we have designed 54 residential projects.</p>
                </div>
                <div class="award_item">
                    <div class="award_tit">
                        <div class="number">11</div>
                        <p>AWARDS</p>
                    </div>
                    <p class="content">Spectrum has been awarded for creativity many times.</p>
                </div>
                <a href="javascript:;" class="btn">CONTACT us</a>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .section_award{
        padding: 40px 20px 50px;
        position: relative;
    }
    .wrap1{
        margin-bottom: 40px;
    }
    .award_title h2{
        margin-bottom: 20px;
        text-align: center;
        font-size: 23px;
        font-weight: 600;
    }
    .award_title p{
        margin-bottom: 25px;
        text-align: center;
        color: var(--bac_brown);
    }
    .wrap2{
        display: flex;
        flex-wrap: wrap;
    }
    .award_tit .number{
        margin-bottom: 5px;
        font-size: 30px;
        font-weight: 600;
    }
    .award_tit p{
        margin-bottom: 15px;
        font-weight: 600;
        position: relative;
    }
    .award_tit p::before{
        content: '';
        width: 15px;
        height: 3px;
        position: absolute;
        left: 50%;
        bottom: -10px;
        background-color: var(--bac_brown);
        transform: translateX(-50%);
    }
    .content{
        color: var(--color_gray);
    }
    .award_item{
        margin-bottom: 40px;
        width: 50%;
        text-align: center;
    }
    .award_item:nth-child(3){
        margin: 0 auto 30px;
    }
    .award_wrap .btn{
        padding: 10px 20px;
        position: absolute;
        bottom: 25px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        font-weight: 600;
        background-color: var(--bac_brown);
        transition: background-color .3s,color .3s;
    }
    .award_wrap .btn:hover{
        color: #000;
        background-color: transparent;
    }
    @media screen and ( min-width: 576px){
        .section_award{
            padding: 50px 20px 70px;
        }
        .award_wrap{
            justify-content: space-between;
        }
        .award_item{
            margin: 0;
            width: 30%;
        }    
        .award_item:nth-child(3){
            margin: 0 0 30px;
        }
        .award_wrap .number{
            font-size: 35px;
        }
        .award_tit p{
            margin-bottom: 20px;
            font-size: 20px;
        }
        .award_wrap .btn{
            bottom: 35px;
        }
    }
    @media screen and ( min-width: 768px){
        .section_award{
            padding: 70px 50px 90px;
            background-image: url('../assets/pic/index-8-853x574.jpg');
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 110%;
        }
        .container{
            display: flex;
            justify-content: space-between;
        }
        .wrap1{
            width: 45%;
        }
        .award_title h2{
            margin-bottom: 25px;
            text-align: left;
            font-size: 30px;
            line-height: 1.3;
        }
        .award_title p{
            margin-bottom: 50px;
            text-align: left;
            font-weight: 600;
        }
        .wrap2{
            width: 40%;
            flex-direction: column;
            /* align-items: flex-end; */
            justify-content: flex-start;
        }
        .pic{
            box-shadow: 7px 7px 30px 20px #aaa7;
        }
        .award_item{
            margin-bottom: 25px;
            width: 100%;
        }
        .award_tit{
            margin-bottom: 20px;
            display: flex;
        }
        .award_tit .number{
            margin-right: 15px;
            font-size: 40px;
        }
        .award_tit p::before{
            left: 0%;
            transform: translate(0);
        }
        .content{
            font-size: 20px;
            text-align: left;
        }
        .award_wrap .btn{
            padding: 10px;
            width: 120px;
            position: initial;
            transform: translate(0);
            text-align: center;
        }
    }
    @media screen and ( min-width: 992px){
        .award_title h2{
            font-size: 29px;
        }
    }
    
</style>