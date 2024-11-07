import { useLocation, useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/helper";
import { useDispatch } from "react-redux";
import { addingCart } from "../cart/cartSlice";
import { useInView } from "react-intersection-observer";

function MenuItem({ pizza }) {
  const { name, unitPrice, soldOut, imageUrl,id} = pizza;
  const {ref} = useInView({threshold:0.3,triggerOnce:true})
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/"

  // if(!pizza) return null
  return (
    
    <li ref={ref} className={`${soldOut ? " opacity-60":"opacity-100"} animate-fade  border-2 hover:border-yellow_300 list-none min-w-44 rounded-lg bg-success h-[40]  md:m-10 m-6`}>
      <img onClick={()=>navigate(`/menu/${id}`)} className=" rounded-t-lg" width={180} src={imageUrl} alt={name} />
      <div className=" text-yellow_400">
        <p className=" text-[15px] text-center font-inter mt-2 mb-1">{name}</p>
        <div className=" text-center mb-1">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>NO Stock!</p>}
        </div>
        {!isHome &&<button onClick={()=> dispatch(addingCart({pizzaId:id,name,unitPrice,quantity:1}))} className="w-full border-[2px] border-yellow_300 hover:bg-yellow_400 hover:text-secondary px-2 py-1 rounded-b-md" disabled={soldOut}>{soldOut?"SoldOut":"Add To Cart"}</button>}
      </div>
    </li>

  );
}

export default MenuItem;
