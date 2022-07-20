import axios from "axios";
import { ref } from "vue";
const api = axios.create({
    baseURL : 'http://localhost:8888/concact'
})

export const postApi = async (obj)=>{
    const ans = ref(false);
    await api.post(api.baseURL,obj)
    .then(res=>{
        alert('成功送出');
        ans.value = true;
    }).catch(err=>{
        console.log('post錯誤',err);
        ans.value = false;
    })
    return ans.value;
}