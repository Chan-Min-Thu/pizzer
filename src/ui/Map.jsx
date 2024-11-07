import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import Card from "./Card"
import { reviews } from "../utils/helper"
import { FaCircle, FaRegCircle } from "react-icons/fa"
// import { useEffect } from "react"

export default function Map() {
  const [point,setPoint] = useState(0);
  const { ref, inView: scroll } = useInView({
    triggerOnce: true,
    threshold: 0.5
  })
  const scrolling = (x)=>{
    const view=document.getElementById('view')
    view.scrollLeft = x
    setPoint(Number(x))
  }
  useEffect(()=>{
    // scrolling()
    setPoint(0)
  },[])
  
  return (
    <div ref={ref} className={`w-full bg-primary md:h-[80vh] h-[80vh] `}>
      <div className="font-inter text-secondary font-bold text-2xl pt-24">
        <h1 className="text-center">Reviews</h1>
      </div>
      <div id="view" className={`md:pt-20 pt-7 no-scrollbar md:w-[60vw] w-[90vw] overflow-x-scroll scroll:w-0 scroll-smooth mx-auto ${scroll ? "animate-fade":"opacity-0"} `}>
        <div className="flex flex-row">
        {reviews.map(item=> <Card key={item.id} item={item} point={point}/>)}
        </div>
      </div>
      <div className="w-20 flex justify-between mx-auto">
        <button id="1" className="text-yellow_400 " onClick={()=> scrolling(0)}>{point === 0 ?<FaCircle className="text-xs"/>:<FaRegCircle className="text-xs"/>}</button>
        <button id="2" className="text-yellow_400 " onClick={()=> scrolling(1093/3)}>{point === 1093/3 ?<FaCircle className="text-xs"/>:<FaRegCircle className="text-xs"/>}</button>
        <button id="3" className="text-yellow_400 " onClick={()=> scrolling((1093/3)*2)}>{point === (1093/3)*2?<FaCircle className="text-xs"/>:<FaRegCircle className="text-xs"/>}</button>
        <button id="4" className="text-yellow_400 " onClick={()=> scrolling(1093)}>{point === 1093?<FaCircle className="text-xs"/>:<FaRegCircle className="text-xs"/>}</button>
      </div>
    </div>
  )
}
