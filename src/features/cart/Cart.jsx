import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import Button from '../../ui/Button';
import { clearCart, getCarts } from './cartSlice';
import EmptyCart from './EmptyCart';



function Cart() {
  const carts = useSelector(getCarts)
  const userName = useSelector(state => state.user.userName)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if(carts.length === 0) return <EmptyCart/>
  return (
    <div className='w-full bg-primary'>
      <div className='h-[80vh] md:w-[70vw] w-[90vw] mx-auto pt-32'>
      <Link className='text-start text-yellow_400 underline pt-20 pb-5' to="/menu">&larr; Back to menu</Link>
        <h2 className='text-secondary pt-5 text-2xl font-medium'>Your cart,{userName}</h2>

        <div className='text-secondary'>
          <div className='m-2 bg-success p-2 rounded-md'>
            {carts.length && carts.map(cart => <CartItem key={cart.pizzaId} cart={cart} />) }
          </div>
          <div className='flex gap-2 mt-5'>
            <Button name="Order Pizzas" type="small" disabled={carts.length === 0?true:false} onClick={() => navigate("/order/new")} />
            <Button name="Clear Carts" type="secondary" disabled={false} onClick={() => dispatch(clearCart())} /></div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
