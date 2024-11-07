import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { addingCart, removeCart } from './cartSlice';
import { formatCurrency } from '../../utils/helper';

export default function UpdateCart({cart}) {
    const dispatch = useDispatch();
  return (
    <div className='flex flex-row justify-center items-center  md:w-16 w-2'>
        <Button name="+" onClick={()=>dispatch(addingCart(cart))} type="round" disabled={false}/>
        <span className='text-xl mx-5'>{formatCurrency(cart.totalPrice)}</span>
        <Button name="-" onClick={()=>dispatch(removeCart(cart))} type="round" disabled={false}/>
    </div>
  )
}
