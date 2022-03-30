<script>
export default {

}
</script>

<template>
  <section class="section section_FromData">
      <div class="container">
          <div class="from_wrap">
              <div class="from_item">
                  <div class="pic">
                      <i class="fa fa-home" aria-hidden="true"></i>
                  </div>
                  <div class="txt">
                      <h3>ARCHITECTURE</h3>
                      <p>We provide high-quality architecture services.</p>
                  </div>
              </div>
              <div class="from_item">
                  <div class="pic">
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                  </div>
                  <div class="txt">
                      <h3>INTERIOR DESIGN</h3>
                      <p>Our team offers unique and stylish architecture solutions.</p>
                  </div>
              </div>
              <div class="from_item">
                  <div class="pic">
                      <i class="fa-solid fa-lightbulb"></i>
                  </div>
                  <div class="txt">
                      <h3>LIGHTING DESIGN</h3>
                      <p>Let our team design unique lighting for your home.</p>
                  </div>
              </div>
          </div>
          <div class="from_wrap">
              <h2>
                  FIND OUT THE PRICE<br/>
                   OF YOUR HOME
              </h2>
              <p>WE WILL CONTACT YOU WITHIN 24 HOURS</p>
              <div class="from_from">
                  <input type="text" placeholder="Name">
                  <input type="email" placeholder="Email">
                  <input type="phone" placeholder="Phone">
                  <a href="javascript:;">SUBMIT</a>
              </div>
          </div>
      </div>
  </section>
</template>

<style scoped>
    .section_FromData{
        padding: 40px 0;
    }
    .from_wrap:first-child{
        margin-bottom: 40px;
    }
    .from_item{
        margin-bottom: 35px;
        padding: 15px 0;
        text-align: center;
    }
    .from_item .pic{
        margin-bottom: 20px;
        font-size: 40px;
        position: relative;
    }
    .from_item .pic::before{
        content: '';
        width: 20px;
        height: 20px;
        position: absolute;
        top: 13%;
        transform: translateX(26px);
        background-color: #C4956A99;
        border-radius: 50%;
    }
    .from_item .txt h3{
        margin-bottom: 5px;
        font-weight: 600;
    }
    .from_item .txt p{
        color: var(--color_gray);
    }
    .from_wrap:last-child h2{
        margin-bottom: 20px;
        text-align: center;
        font-size: 25px;
        font-weight: 600;
    }
    .from_wrap:last-child p{
        margin-bottom: 30px;
        text-align: center;
        color: var(--bac_brown);
    }
    .from_from{
        margin: 0 auto;
        padding: 40px 35px 40px;
        width: 75%;
        background-color: var(--bac_black);
        color: #fff;
        border-radius: 10px;
    }
    .from_from input{
        margin-top: 5px;
        margin-bottom: 25px;
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
    .from_from input:last-of-type{
        margin-bottom: 35px;
    }
    .from_from input::placeholder{
        color: #fff;
        transition: opacity .3s;
    }
    .from_from input:focus::placeholder{
        opacity: 0;
    }
    .from_from a{
        padding: 10px 20px;
        color: #fff;
        background-color: var(--bac_brown);
        border: none;
        transition: background-color .3s;
    }
    .from_from a:hover{
        background-color: transparent;
    }
    @media screen and ( min-width: 576px){
        .from_wrap:first-of-type{
            margin-bottom: 0;
            display: flex;
            justify-content: space-around;
        }
        .from_wrap:first-of-type .from_item{
            width: 30%;
        }
    }
</style>