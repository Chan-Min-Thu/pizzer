import { useEffect, useState } from "react"


export const useVisible=(ref)=>{
    const [visible,setVisible] = useState(0);

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setVisible(entry.isIntersecting)
            }
        )
        if(ref.current){
            observer.observe(ref.current)
        }
        return ()=>{
            if(ref.current){
            observer.unobserve(ref.current)
            }
        }
    },[ref])
    return visible;
}