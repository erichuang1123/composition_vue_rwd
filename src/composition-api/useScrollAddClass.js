export function useScrollAddClass(dom){
    // 滾動進場動畫
    if(dom == null) return 
    if(window.scrollY > (dom.value.offsetTop - 400)){
        return true;
    }
}