import {postApi} from '@/api/index.js'
import { reactive, ref } from 'vue';
export const addSubmitBtn = ()=>{
    const showBlock = ref(true);
    const submitObj = reactive({
        name : '',
        email : '',
        phone : '',
    });
    const submitHandler = async ()=>{
        const answer = await postApi(submitObj);
        if(answer){
            showBlock.value = false;
        }
    }
    return {showBlock,submitObj,submitHandler}
}