import { ref } from "vue"

export function bacMove(dom,e){
    let { screenX , screenY } = e;
    const x = ref(Math.floor(((screenX / dom.value.offsetWidth * 40) * 2 - 40)*-1));
    const y = ref(Math.floor(((screenY / dom.value.offsetHeight * 40) * 2 - 40)*-1));
    return { x , y }
}