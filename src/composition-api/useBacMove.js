import { ref } from "vue"

export function bacMove(dom,e){
    let { offsetX , offsetY } = e;
    if(e.target != dom.value){ 
        offsetX += e.target.offsetLeft;
        offsetY += e.target.offsetTop;
    }
    const x = ref(((offsetX / dom.value.offsetWidth * 40) * 2 - 40)*-1);
    const y = ref(((offsetY / dom.value.offsetHeight * 40) * 2 - 40)*-1);
    return { x , y }
}