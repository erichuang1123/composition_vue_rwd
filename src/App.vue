<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import FromData from '@/components/FromData.vue'
import HowWedo from '@/components/HowWedo.vue'
import Our from '@/components/Our.vue'
import Award from '@/components/Award.vue'
import Projects from '@/components/Projects.vue'
import NewIdea from '@/components/NewIdea.vue'
import GiveBack from '@/components/GiveBack.vue'
import OurFrom from '@/components/OurFrom.vue'
import Footer from '@/components/Footer.vue'
import { reactive, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
  components : {
    Header,
    Banner,
    FromData,
    HowWedo,
    Our,
    Award,
    Projects,
    NewIdea,
    GiveBack,
    OurFrom,
    Footer
  },
  setup(){
    let number = 0;
    const domArr = reactive({data:[]});
    const takeOf = (dom)=>{
      domArr.data[number] = dom.value;
      number+=1;
    }
    return {takeOf,domArr}
  }
}
</script>

<template>
  <Header :domArr="domArr"/>
  <Banner @banner="takeOf"/>
  <FromData @fromData="takeOf"/>
  <HowWedo/>
  <Our @our="takeOf"/>
  <Award/>
  <Projects @projects="takeOf"/>
  <NewIdea/>
  <GiveBack/>   
  <OurFrom/>
  <Footer @footer="takeOf"/>
</template>

<style>
  :root{
    --bac_black : #282828;
    --bac_brown : #C4956A;
    --color_gray : #9E9E9E;
    overflow-x: hidden;
  }
  .section{
    transition: transform .4s;
  }
  .section:nth-of-type(even){
    transform: translateX(-200%);
  }
  .section:nth-of-type(odd){
    transform: translateX(200%);
  }
  .section.active:nth-of-type(even){
    transform: translateX(0);
  }
  .section.active:nth-of-type(odd){
    transform: translateX(0);
  }
  .container{
    font-family: 'Montserrat', sans-serif;
    font-family: 'Noto Serif TC', serif;
  }
  .sr_only{
      width: 1px;
      height: 1px;
      position: absolute;
      overflow: hidden;
  }
  img{
    width: 100%;
    vertical-align: middle !important;
  }
  a{
    text-decoration: none;
  }
  ::selection{
    background-color: var(--bac_brown);
    color: #fff;
  }
  .our_page{
      margin: 0 auto;
  }
  .our_page .page{
      margin: 0 5px;
      width: 12px;
      height: 12px;
      display: inline-block;
      background-color: #aaa;
      border-radius: 50%;
      transition: background-color .3s;
  }
  .our_page .page.active{
      background-color: var(--bac_brown);
  }  
  /* transition標籤動畫 */
  .fad-enter-active,
  .fad-leave-active{ 
      transition: opacity .5s ease;
  }
  .fad-enter-from{
    opacity : 0;
  }
  .fad-enter-to{
    opacity : 1;
  }
  .fad-leave-from{
    opacity : 1;
  }
  .fad-leave-to{
    opacity : 0;
  }
  @media screen and (min-width: 1200px){   
    .container{
      margin: 0 auto;
      width: 1200px;
    } 
  }
</style>