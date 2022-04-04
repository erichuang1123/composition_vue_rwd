export function useScrollAddClass(dom){
    if(dom == null) return 
    if(window.scrollY > (dom.value.offsetTop - 400)){
        return true;
    }
}