import UpdateCart from "./UpdateCart";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteMenu } from "./cartSlice";

function CartItem({ cart }) {
  const { name, quantity } = cart;
  const dispatch = useDispatch()
  return (
    <div>
    <div className="md:w-[50vw] w-[80vw] m-2 flex justify-between items-center">
      <p className="w-20">
        {quantity} &times; {name}
      </p>
      <div className="flex justify-center ">
        <UpdateCart cart={cart} />
      </div>
      <div className="flex justify-end">
        <Button name="Delete" type="small" onClick={() => dispatch(deleteMenu(cart))} disabled={false} />
      </div>
    </div>
     <div className="h-[1px] w-full bg-whitegray"></div>
    </div>
  );
}

export default CartItem;
