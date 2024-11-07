import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import { TbArrowBack } from "react-icons/tb";
import { formatCurrency } from "../../utils/helper";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { addingCart } from "../cart/cartSlice";
import Button from "../../ui/Button";

export default function Menu() {
  const {ref,inView:scroll} = useInView({threshold:0.3,triggerOnce:true})
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const menus = useLoaderData();
  const menu = menus.find(menu=> menu.id ===  Number(id))
  const {name,unitPrice,soldOut,ingredients,imageUrl} = menu
  const addToCartfun = ()=>{
      const newItem = {name,unitPrice,pizzaId:Number(id)}
      dispatch(addingCart(newItem));
      navigate("/cart")
  }
  
  return (  
    <div className="bg-primary h-[100vh] w-full flex justify-center">
    <div className="md:w-[80vw] w-[90vw] flex flex-col h-[80vh] justify-around">
    <div onClick={()=>navigate("/menu")} className="text-4xl text-secondary  mt-24 h-16 w-16 flex justify-center items-center rounded-full p-1 hover:bg-success "><TbArrowBack/></div>
    <div ref={ref} className="bg-primary w-[60vw] flex mx-auto md:flex-row justify-around flex-col md:mt-0 mt-24 items-center">
        <div className={`md:w-[30vw] w-[50vw] ${scroll?"animate-fade":"opacity-0"}`}>
            <img src={imageUrl} width={400}/>
        </div>
        <div className="md:w-[30vw] w-[3/4] pt-5  mx-auto">
            <h1 className={`text-3xl font-inter font-extrabold mb-5 text-yellow_400 ${scroll?" animate-fade":"opactiy-0"}`}>{menu.name}</h1>
            <p className={`text-info mb-4 text-md ${scroll?"animate-fade":"opacity-0"}`}>An all-time favorite! Our Pepperoni Pizza is loaded with generous slices of spicy, smoky pepperoni on a bed of bubbling mozzarella cheese, all atop our signature tomato sauce. Perfect for those who love bold, savory flavors.</p>
            <p className={`text-whitegray mb-4 text-md ${scroll?"animate-fade":"opacity-0"}`}>{ingredients?.map(i=> i.charAt(0).toUpperCase()+i.slice(1)).join(",")}</p>
            <p className={`text-3xl font-thin mb-4 text-yellow_300 ${scroll?"animate-fade":"opacity-0"}`}>{formatCurrency(unitPrice)}</p>
            <Button name={soldOut?"Sold Out":"Add to cart"} type="primary" onClick={addToCartfun} disabled={soldOut}/>
        </div>
    </div>
    </div>
    </div>
  )
}

