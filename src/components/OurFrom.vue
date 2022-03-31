<script>
export default {

}
</script>

<template>
    <section class="section section_ourFrom">
        <div class="container">
            <div class="ourFrom_title">
                <h2>
                    GET IN TOUCH WITH<br>
                    OUR TEAM
                </h2>
                <p>LET’S WORK TOGETHER!</p>
            </div>
            <div class="ourFrom_from">
                <input type="text" placeholder="Name">
                <input type="email" placeholder="Email">
                <input type="phone" placeholder="Phone">
                <a href="javascript:;">SUBMIT</a>
            </div>            
        </div>
    </section>
</template>

<style scoped>
    .section_ourFrom{
        padding: 50px 0;
    }
    .ourFrom_title{
        text-align: center;
    }
    .ourFrom_title h2{
        margin-bottom: 15px;
        font-size: 25px;
        font-weight: 600;
        line-height: 1.2;
    }
    .ourFrom_title p{
        margin-bottom: 25px;
        color: var(--bac_brown);
        font-size: 18px;
        font-weight: 600;
    }
     .ourFrom_from{
        margin: 0 auto;
        padding: 40px 35px 40px;
        width: 75%;
        background-color: var(--bac_black);
        color: #fff;
        border-radius: 10px;
    }
    .ourFrom_from input{
        margin-top: 5px;
        margin-bottom: 35px;
        padding: 5px 0;
        width: 100%;
        display: block;
        background-color: transparent;
        outline: none;
        border: none;
        font-size: 16px;
        border-bottom: 1px solid #6665;
        color: #fff;
    }
    .ourFrom_from input:last-of-type{
        margin-bottom: 35px;
    }
    .ourFrom_from input::placeholder{
        color: #fff;
        transition: opacity .3s;
    }
    .ourFrom_from input:focus::placeholder{
        opacity: 0;
    }
    .ourFrom_from a{
        padding: 10px 20px;
        color: #fff;
        background-color: var(--bac_brown);
        border: none;
        transition: background-color .3s;
    }
    .ourFrom_from a:hover{
        background-color: transparent;
    }
    @media screen and ( min-width: 768px){
        .section_ourFrom{
            padding: 40px 50px;
        }
        .ourFrom_title{
            margin: 0 auto;
            width: 500px;
        }        
        .ourFrom_title h2{
            text-align: left;
        }        
        .ourFrom_title p{
            text-align: left;
        }        
        .ourFrom_from{
            width: 430px;
        }
        .ourFrom_from input{
            margin-bottom: 50px;
        }
    }
</style>