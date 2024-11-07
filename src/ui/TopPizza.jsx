import { useInView } from "react-intersection-observer"
import Button from "./Button"
import { useNavigate } from "react-router-dom"

export default function TopPizza() {
  const navigate = useNavigate();
  const { ref,inView:scroll} = useInView({
    triggerOnce:true,
    threshold:0.4
  })
  return (
    <div className='w-full bg-primary md:h-[50vh] h-[80vh]'>
      <div ref={ref} className="md:w-[70vw] w-full h-full flex md:flex-row flex-col mx-auto">
        <div className={`${scroll ?" animate-fade-up animate-delay-500 animate-ease-in":"opacity-0"}  md:w-[40vw] flex self-center justify-center w-[90vw] md:h-[50vh] h-[40vh]`}>
          <img src="/pizzer-4.png" alt="pizza" width={400}/>
        </div>
        <div className="md:w-[50vw] w-[85vw] text-inter h-[25vh] flex md:justify-around justify-center  flex-col self-center">
          <h3 className={` ${scroll ?" animate-fade animate-delay-600 animate-ease-in":"opacity-0"} md:text-3xl text-2xl mb-2 text-secondary font-semibold`}>Our Top Picks  for you.</h3>
          <p className={` ${scroll?" animate-fade animate-delay-700 animate-ease-in":"opacity-0"} text-[16px] mb-3 text-whitegray`}>A healthy and delicious combo of fresh veggies, mozzarella, and zesty tomato sauce.Our recommended pizzas are curated based on customer favorites and our chef’s top picks, ensuring you get the best flavors every time.</p>
          <div>
          <Button name="Order Now" scroll={scroll} onClick={()=>navigate("/menu")} type="primary" ></Button>
          </div>
        </div>
      </div>
    </div>
  )
}
