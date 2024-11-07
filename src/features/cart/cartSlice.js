import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts:[]
}
export const cartSlice = createSlice({
    name:"carts",
    initialState,
    reducers:{
        addingCart:(state,action)=>{
            const isCart = state.carts.find(item=> item.pizzaId === action.payload.pizzaId)
            if(isCart){
               state.carts =  state.carts.map(item=> item.pizzaId===action.payload.pizzaId  ? {...item,quantity:item.quantity +1,totalPrice:(item.quantity+1)*(item.unitPrice)}:item)
            }else{
               state.carts=[...state.carts,{pizzaId:action.payload.pizzaId,name:action.payload.name,unitPrice:action.payload.unitPrice,quantity:1,totalPrice:action.payload.unitPrice}]
        }
        },
        removeCart:(state,action)=>{
            const isCart = state.carts.find(item=>item.pizzaId === action.payload.pizzaId)
            if(isCart.quantity === 1){
               state.carts = state.carts.filter(cart=> cart.pizzaId !== isCart.pizzaId)
            }else{
                state.carts = state.carts.map(item=> item.pizzaId === action.payload.pizzaId ? {...item,quantity:item.quantity-1,totalPrice:(item.quantity-1)* (item.unitPrice)}:item)
            }
        },
        deleteMenu:(state,action)=>{
            state.carts = state.carts.filter(cart=> cart.pizzaId !== action.payload.pizzaId)
        },
        clearCart:(state)=>{ state.carts = []}
    }
})

export const {addingCart,removeCart,clearCart,deleteMenu} = cartSlice.actions

export default cartSlice.reducer


export const getCarts= (state)=> state.carts.carts;

export const getTotalCartsPrice = (carts)=> carts.reduce((curr,accu)=> curr + accu.totalPrice,0)