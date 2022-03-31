<script>
export default {
}
</script>

<template>
    <header class="section main_header">
        <a href="javascript:;">
            <h1>
                <img src="../assets/pic/logo-inverse-169x42.png" alt="logo">
                <span class="sr_only">SPECTRUM</span>
            </h1>
        </a>
        <a href="javascript:;" class="btn">
            <div class="line line1 open"></div>
            <div class="line line2 open"></div>
            <div class="line line3 open"></div>
            <!-- open開關要做 -->
        </a>
        <ul>
            <li>
                <a href="javascript:;">Home</a>
            </li>
            <li>
                <a href="javascript:;">About</a>
            </li>
            <li>
                <a href="javascript:;">Team</a>
            </li>
            <li>
                <a href="javascript:;">Portfolio</a>
            </li>
            <li>
                <a href="javascript:;">Contacts</a>
            </li>
            <li class="phone">
                <a href="javascript:;">
                    <i class="fa fa-mobile" aria-hidden="true"></i>
                     1-300-123-1234
                </a>
            </li>
        </ul>
    </header>
</template>

<style scoped>
    .main_header{
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        background-color: var(--bac_black);
        box-shadow: 1px 3px 5px 5px #0005;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 10;
    }
    .main_header h1{
        margin-right: 5vw;
        padding: 8px 10px;
    }
    .btn{
        width: 30px;        
        height: 30px;
        display: flex;
        align-items: center;
    }
    .btn .line{
        width: 30px;
        height: 1.5px;
        position: absolute;
        background-color: #fff;
        transition: .3s ease-in-out;
    }
    .btn .line1{
        transform: translateY(-8px);
    }
    .btn .line3{
        transform: translateY(8px);
    }
    .btn .line2.open{
        opacity: 0;
    }
    .btn .line1.open{
        transform: rotate(45deg);
    }
    .btn .line3.open{
        transform: rotate(-45deg);
    }
    ul{
        padding-top: 15px;
        width: 250px;
        height: 100vh;
        position: absolute;
        top: 100%;
        box-shadow: 1px 1px 2px 2px #0005;
        transform: translate(-120%);
        transition: transfrom .3s;
        background-color: var(--bac_black);
        z-index: 25;
    }
    ul li a{
        padding: 15px 10px;
        display: block;
        color: #666;
        transition: color .3s,background-color .3s;
    }
    ul li:hover a{
        color: #fff;
        background-color: var(--bac_brown);
    }
    .phone a{
        font-size: 20px;
    }
    ul.active {
        transform: translate(0%);
    }
    @media screen and ( min-width: 1200px){
        /* js滾輪超過高度還要處理 */
        .main_header{
            width: 30%;
            box-shadow: 0 0 0 0 transparent;
            position: absolute;
            background-color: transparent;
        }        
        ul{
            padding: 20px 20px;
            width: 650px;
            height: 80px;
            top: -250%;
            left: 85.6%;
            display: flex;
            align-items: center;
            background-color: #fff;
            transition: top .3s;
        }
        ul.active{
            top: 0;
            left: 85.6%;
        }
        ul li{
            padding: 0 10px;
        }
        ul li a{
            color: #000;
            font-weight: 600;
        }
        .fa-mobile{
            color: var(--color_gray);
        }
        .btn{
            transform: rotatey(180deg);
        }
        .btn .line1{
            width: 0;
        }
        .btn .line3{
            width: 15px;
        }
        .btn:hover .line1{
            width: 30px;
        }
        .btn:hover .line3{
            width: 30px;
        }
        /* 點擊後不要改長度 */
        .btn .line1.open{
            width: 30px;
        }
        .btn .line3.open{
            width: 30px;
        }
    }
</style>
