import { HiStar,HiCurrencyDollar } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import { GiPartyPopper } from "react-icons/gi";
import { Amenity } from "./Amenity";


const amenities = [{
    id:1,
    icon:<HiCurrencyDollar />,
    title:"Cash on Delivery",
    description:"Pay with cash when your order arrives"
},
{   
    id:2,
    icon:<TbTruckDelivery />,
    title:"Food Delivery",
    description:"Enjoy fast and reliable delivery right to your doorstep."
},
{
    id:3,
    icon:<GiPartyPopper />,
    title:"Party Orders",
    description:"Large orders, perfect for celebrations and gatherings."
}]

export default function Amenities() {
  return(
        <div className="amenities bg-cover bg-center w-full md:h-[50vh] h-[75vh] flex md:justify-center justify-start flex-col items-center">
            <div className="text-secondary font-inter md:mt-10 mt-24">
                <h1 className=" md:text-3xl text-2xl font-bold">Amenities</h1>
                <div className="relative text-2xl  before:absolute before:content-[''] before:left-[-15px] before:top-[9px] before:w-14 before:bg-yellow_400 before:h-[2px] after:content-['']  after:absolute after:w-14 after:h-[2px] after:bg-yellow_400 after:right-[-16px] after:top-[9px] a flex justify-center text-center text-yellow_400"><HiStar/><HiStar /><HiStar /></div>
            </div>
            <div className="flex w-1/2 md:flex-row flex-col md:justify-between justify-center mx-auto">
                {amenities.map(amenity=> <Amenity amenity={amenity} key={amenity.id}/>)}
            </div>

        </div>
    )
}
