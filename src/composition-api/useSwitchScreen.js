import { ref } from "vue";

export function switchScreen(arrLength){
    const number = ref(0);
    const nextFn = ()=>{
        number.value++;
        if(number.value >= arrLength){
            number.value = 0;
        }
        console.log(number.value);
    }
    const prevFn = ()=>{
        number.value--;
        if(number.value < 0){
            number.value = arrLength-1;
        }
        console.log(number.value);
    }
    return {number,nextFn,prevFn}
}