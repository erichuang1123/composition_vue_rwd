<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
export default {
    setup(props,context){
        const footer = ref(null);
        onMounted(()=>{
            context.emit('footer',footer)
        })
        return {footer}
    }
}
</script>

<template>
    <footer class="sectopn main_footer" ref="footer">
        <a href="javascript:;">
            <h2>
                <img src="../assets/pic/logo-inverse-2-54x63.png" alt="logo">
                <span class="sr_only">SPECTRUM</span>
            </h2>
        </a>
        <a href="javascript:;" class="phone">1-800-901-234</a>
        <a href="javascript:;" class="email">info@demolink.org</a>
        <div class="icon_wrap">
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
        <div class="copyright">&copy; 2022 Spectrum. All Rights Reserved 黃致皓模仿練習</div>
    </footer>
</template> 

<style scoped> 
    .main_footer{
        padding: 80px 0;
        background-color: var(--bac_black);
        color: #fff;text-align: center;
    }
    h2{
        margin: 0 auto 20px;
        width: 60px;
    }
    .phone{
        margin-bottom: 10px;
        display: block;
        font-size: 22px;
        color: #fff;
        transition: color .3s;
    }
    .email{
        margin-bottom: 25px;
        padding-bottom: 15px;
        display: block;
        font-size: 22px;
        color: #fff;
        transition: color .3s;
        position: relative;
    }
    .email::before{
        content: '';
        width: 150px;
        height: 1px;
        position: absolute;
        bottom: -5px;
        left: 50%;
        background-color: #9E9E9E55;
        transform: translateX(-50%);
    }
    .phone:hover,
    .email:hover{
        color: var(--bac_brown);
    }
    .icon_wrap{
        margin-bottom: 20px;
    }
    .icon_wrap a{
        margin: 0 10px;
        color: #fff;
    }
    .icon{
        transition: color .3s;
    }
    .icon:hover{
        color: var(--bac_brown);
    }
    .copyright{
        color: #aaa;
        font-size: 14px;
    }
    @media screen and ( min-width: 768px){
        .main_footer{
            padding: 60px 0;
        }
        h2{
            margin-bottom: 30px;
        }
        .phone{
            font-size: 30px;
        }
        .email{
            padding-bottom: 40px;
            margin-bottom: 40px;
            font-size: 30px;
        }
        .icon_wrap{
            margin-bottom: 40px;
        }
        .icon_wrap .icon{
            margin: 0 20px;
            font-size: 30px;
        }
    }
</style>