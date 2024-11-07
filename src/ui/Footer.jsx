import { useInView } from "react-intersection-observer";
import { FaFacebook, FaYoutube, FaLine } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { baseStyle } from "../utils/helper";

const information = [{id:1,name:"Home",delay:50},{id:2,name:"Menus",delay:75},{id:3,name:"Services",delay:100},{id:4,name:"Contact",delay:150}]
const helpfulLinks = [{id:1,name:"Services",delay:75},{id:2,name:"Terms & condition",delay:100},{id:3,name:"Supports",delay:150},{id:4,name:"Privacy & policy",delay:200}]
const services = [{id:1,name:"Menu",delay:100},{id:2,name:"Orders",delay:200},{id:3,name:"Delivery",delay:300},{id:4,name:"Cash On Delivery",delay:500}]
const contacts =[{id:1,name:"+66634891134",delay:200},{id:2,name:"Pizza@gmail.com",delay:300},{id:3,name:"Bangkok,Phaya Thai, Saphan Khwai,Soi Inthama 1",delay:500}]

export default function Footer() {
    const {ref,inView:scroll}= useInView({
        threshold:0.5,
        triggerOnce:true
    })

    return (
        <div className="bg-primary">
            <div className="flex flex-col md:flex-row mx-auto md:w-[90vw] pt-5 text-secondary">
                <div ref={ref} className="md:w-[20vw] md:m-8 w-[60vw] my-5 mx-auto">
                    <h1 className="header-icon font-bold text-3xl tracking-wide pb-2">PIZZER</h1>
                    <p className={` ${scroll ? "animate-fade animate-delay-100 animate-ease" : ""}  text-base text-whitegray`}>Serving delicious, handcrafted pizzas with fresh ingredients. Order online for fast delivery or pickup—perfect for any occasion!</p>
                    <div ref={ref} className={`flex w-1/2 justify-between text-2xl py-3`}>
                        <FaFacebook className={`${baseStyle(scroll,50)}`} />
                        <FaSquareXTwitter className={`${baseStyle(scroll,75)}`} />
                        <FaYoutube className={`${baseStyle(scroll,100)}`} />
                        <FaLine className={`${baseStyle(scroll,150)} `} />
                    </div>
                </div>
                <div className="md:w-[20vw] md:m-8 w-[60vw] my-5 mx-auto font-inter">
                    <h1 className="text-xl font-medium pb-2">Information</h1>
                    <div className={`flex text-base flex-col text-whitegray`}>
                        {information.map((x)=> <span key={x.id} className={`${baseStyle(scroll,x.delay)}`}>{x.name}</span>)}
                    </div>
                </div>
                <div className="md:w-[20vw] md:m-8 w-[60vw] my-5 mx-auto font-inter">
                    <h1 className="text-xl font-medium pb-2">Helpful Links</h1>
                    <div className="flex text-base flex-col text-whitegray">
                    {helpfulLinks.map((x)=> <span key={x.id} className={`${baseStyle(scroll,x.delay)}`}>{x.name}</span>)}
                    </div>
                </div>
                <div className="md:w-[20vw] md:m-8 w-[60vw] my-5 mx-auto font-inter">
                    <h1 className="text-xl font-medium pb-2">Our Services</h1>
                    <div className="flex text-base flex-col text-whitegray ">
                    {services.map((x)=> <span key={x.id} className={`${baseStyle(scroll,x.delay)}`}>{x.name}</span>)}
                    </div>
                </div>
                <div className="md:w-[20vw] md:m-8 w-[60vw] my-5 mx-auto font-inter">
                    <h1 className="text-xl font-medium pb-2">Contact Us</h1>
                    <div className="flex text-base flex-col text-whitegray ">
                    {contacts.map((x)=> <span key={x.id} className={`${baseStyle(scroll,x.delay)}`}>{x.name}</span>)}
                    </div>
                </div>
            </div>
            <div className="p-3 font-inter text-secondary">
                <div className="w-[90vw] h-[2px] bg-[#5b5a5a] m-4 mx-auto"></div>
                <p className="text-center text-sm">2024 @ designed by CMT</p>
            </div>
        </div>
    )
}
