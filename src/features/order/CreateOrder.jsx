import { useState } from "react";
import { Form,  useActionData,redirect, useNavigation } from "react-router-dom";
import { createOrder} from "../../services/apiRestaurant";
import { useDispatch, useSelector } from "react-redux";
import { clearCart,getCarts,getTotalCartsPrice } from "../cart/cartSlice";
import { store } from "../../services/store";
import Button from "../../ui/Button";
import EmptyCart from "../cart/EmptyCart";
import { formatCurrency } from "../../utils/helper";
import { fetchAddress, updateUser } from "../user/userSlice";
// import CreateUser from "../user/CreateUser";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );



function CreateOrder() {
  const navigation = useNavigation();
  const [withPriority,setWithPriority] = useState(false);
  const {userName,address,status:addressStatus,position,error} = useSelector(state=> state.user)
  const isLoadingAddress = addressStatus === "loading"
  const carts = useSelector(getCarts)
  const dispatch = useDispatch();
  const totalCartsPrice=getTotalCartsPrice(carts)
  const priorityPrice = withPriority ? totalCartsPrice * 0.2 :0
  const totalPrice = totalCartsPrice + priorityPrice

  const isSubmitting = navigation.state === "submitting"
  const formError = useActionData();
  if(!carts.length) <EmptyCart/>
  return (
    <div className="w-full h-full font-inter bg-primary pt-24 px-5">
      <div className="md:w-[50vw] w-full mx-auto h-auto">
      <h2 className="text-2xl my-5 ">Ready to order? Lets go!</h2>
      
      <Form method="POST">
        <div className="flex md:flex-row flex-col mb-5 gap-2 w-[100%]">
          <label className="text-secondary md:basis-40 text-xl mb-3">First Name</label>
          <input className="input w-full" type="text"  name="customer" defaultValue={userName} required />
        </div>

        <div className="flex md:flex-row flex-col gap-2 mb-5">
          <label className="text-secondary md:basis-40 text-xl mb-3">Phone number</label>
          <div className="w-full grow">
            <input className="input w-full placeholder:text-whitegray" type="tel" placeholder="example:09634891074" name="phone" required />
            {formError?.phone && <p className=" text-[red] mt-2 text-sm">{formError.phone}</p>}
          </div>
          
        </div>

        <div className="flex md:flex-row flex-col gap-2 mb-6 relative">
          <label className="text-secondary md:basis-40 text-xl mb-3">Address</label>
          <div className="grow">
            {position && <input className="input w-full" type="text" name="address" defaultValue={address} disabled={isLoadingAddress} required />}
            {addressStatus === 'error' && <p className=" text-[red] mt-2 text-sm">{error}</p>}
          </div>
          {!position.latitude && !position.longitude && <span className="absolute right-[5px] top-[51px]  z-50 md:right-[5px] md:top-[5px] ">
            <Button type="small" name='Get position' className="text-secondary" onClick={(e)=>{
              e.preventDefault();
              dispatch(fetchAddress())}}/>
            </span>}
        </div>

        <div className="flex flex-row gap-2 mb-6">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow_400 focus:outline-none focus:ring mr-4 focus:ring-yellow_400 focus:ring-offset-2 "
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="text-secondary" htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(carts)}/>
          <input type="hidden" name="position" value={position.latitude && position.longitude ? `${position.latitude} ,${position.longitude}`:""}/>
          <Button disabled={isSubmitting} name={isSubmitting?"Placing Order...":`Order now from ${formatCurrency(totalPrice)}`} type="primary" />
        </div>
      </Form>
      </div>
    </div>
  );
}

export async function action({request}) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const order = {
    ...data,
    cart:JSON.parse(data.cart),
    priority:data.priority === "on"?true:false
  }
  const error = {};
  if(!isValidPhone(order.phone)) error.phone = "Please give us your correct phone number.We might need it to contact you."
  if(Object.keys(error).length>0) return error
  
  //if everything is ok ,create new order and redirect to new order page.
  
  const newOrder = await createOrder(order);
  store.dispatch(updateUser(data.customer))
  store.dispatch(clearCart())

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
