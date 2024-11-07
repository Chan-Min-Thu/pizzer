import { useInView } from "react-intersection-observer";
import CreateUser from "../features/user/CreateUser";
import Amenities from "./Amenities";
import Map from "./Map";
import Products from "./Products";
import TopPizza from "./TopPizza";
import { useSelector } from "react-redux";
import { getUser } from "../features/user/userSlice";



function Home() {
  const user=useSelector(getUser);
  const {ref,inView:scroll} = useInView({
    triggerOnce:true,
    threshold:0.1,
  })
 
  return (
    <div className=" w-full h-auto relative flex justify-center flex-col ">
      {/* home section */}
      <div className="bg-primary w-full md:h-[90vh] h-[100vh] flex md:flex-row flex-col items-center justify-around self-center">
        <div ref={ref} className="w-[80vw] bg-primary flex md:flex-row flex-col items-center justify-around">
          <div  className={`flex justify-center flex-col md:w-1/3 w-[80vw] md:h-[70vh] h-[50vh] `}>
            <h3 className={` ${scroll?"animate-fade animate-ease animate-delay-75":"opacity-0"} font-league text-yellow_400 text-2xl font-semibold text-start py-3`}>
              Hot, Fresh & Delicious
            </h3>
            <h1 className={` ${scroll?"animate-fade animate-ease animate-delay-150":"opacity-0"} font-league text-yellow_400 text-5xl font-extrabold text-start py-5`}>
              Delivered to Your Door!
            </h1>
            <p className={` ${scroll?"animate-fade animate-ease animate-delay-200":"opacity-0"} font-inter  text-[#CBC7C7] text-md text-start`}>
              Satisfy your pizza cravings with our hand-crafted pizzas, made from the freshest ingredients.
            </p>
            <CreateUser user={user}/>
          </div>
          <div className={` ${scroll?"animate-fade-up animate-delay-300":"opacity-0"} md:w-1/4   w-[50vw] h-[30vh]`}>
            <img src="pizzer-3.png" alt="pizza" width={900} />
          </div>
        </div>
      </div>
      {/* product to footer */}
      <div className="w-full">
        <Products />
        {/*Amenities for sticky component*/}
        <div className="md:h-[50vh] h-[75vh] z-[-1] sticky bottom-0 bg-[transprent]">
          <Amenities />
        </div>
        <div className="w-full">
          <TopPizza/>
         
         
        </div>
        <Map/>
      </div>
      
    </div>
  );
}

export default Home;