import { useInView } from "react-intersection-observer";


export const Amenity = ({amenity}) => {
    const {ref,inView:scroll} = useInView({threshold:1,triggerOnce:true,delay:900})
    const {icon,title,description} = amenity;
  return (
    <div ref={ref} className={`md:w-56 text-center animate-fade-up mx-auto`}>
       <span className={` ${scroll?"animate-fade animate-ease animate-delay-300" :"opacity-0"} text-5xl m-3 flex justify-center text-secondary`}>{icon}</span>
       <h4 className={` ${scroll?"animate-fade animate-ease animate-delay-500" :"opacity-0"} text-secondary m-3 text-2xl`}>{title}</h4>
       <p className={`text-whitegray ${scroll?"animate-fade animate-ease animate-delay-500":"opacity-0"}`}>{description}</p>
    </div>
  )
}
