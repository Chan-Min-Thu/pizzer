import { SiComma } from "react-icons/si";
import { useInView } from "react-intersection-observer";

export default function Card({item,point}) {
   const {name,review,imgUrl,id} = item;
   const {ref,inView:scroll} = useInView({threshold:0.5,triggerOnce:true})
   const y =(Number(id)-1) * 1093/3 ;
    const isTragetedCard = y === point
  return (
    <div ref={ref} className="font-inter min-w-[300px] h-[350px] m-10 bg-success p-5 rounded-md">
        <div>
            <div className="w-32 h-16 rounded-full gap-2 flex ">
                <img src={imgUrl} width={400} className={`w-16 h-16 rounded-full ${scroll?" animate-fade-up animate-delay-300":"opacity-0"}`} alt={`${name} of photo`}/>
                {isTragetedCard &&   <span className="flex animate-fade text-secondary">
                <SiComma/>
                <SiComma/>
                </span> }
            </div>
            <p className={`text-md pt-2 text-secondary font-semibold ${scroll?"animate-fade-up animate-delay-500":"opacity-0"}`}>{name}</p>
        </div>
        <p className={`text-whitegray text-md pt-5 ${scroll?"animate-fade-up animate-delay-700":"opacity-0"} `}>{review}</p>
    </div>
  )
}
