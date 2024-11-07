// Test ID: IIDSAT

import { useEffect } from "react";
import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import OrderItem from "./OrderItem";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helper";
import UpdateOrder from "./UpdateOrder";
function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData()
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart
  } = order;
  const fetcher = useFetcher();

  useEffect(()=>{
    if(!fetcher.data && fetcher.state === 'idle'){
      fetcher.load("/menu")
    }
  },[fetcher])

  const deliveryIn = calcMinutesLeft(estimatedDelivery);


  return (
    <div className="md:w-[70vw] w-[100vw] bg-primary mx-auto space-y-4 pt-40 pb-9 font-inter text-secondary px-10">

      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl ">Order #{id} Status</h2>
        <div className="space-x-2">
          {priority && <span className="rounded-full bg-[red] px-3 py-1 text-sm uppercase tracking-wide text-secondary">Priority</span>}
          
          <span className="rounded-full bg-[yellowgreen] px-3 py-1 text-sm font-semibold uppercase tracking-wide text-[green]">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-4 bg-success px-6 py-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-whitegray">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className=" divide-whitegray divide-y border-b border-t">
            {cart.map(item => <OrderItem key={item.pizzaId} item={item} 
            isLoadingIngredients={fetcher.state === "loading"} 
            ingredients={fetcher.data?.find(el=>el.id === item.pizzaId).ingredients || []}/>)}
      </ul>

      <div className="bg-success px-6 py-5">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>

      {!priority && <UpdateOrder/>}
    </div>
  );
}

export default Order;

export async function  loader({params}) {
  const order = await getOrder(params.orderId)
  return order;
}
