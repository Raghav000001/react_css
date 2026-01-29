import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addToCart:(state,action)=> {
            const id = action.payload
            const item = action.payload
            
           const existingItem = state.items.find((i)=>i.id === id)
           if (existingItem) {
              existingItem.qty+=1
           }
           state.items.push({...item,qty:1})
        },
        removeFromCart:()=> {},
        clearCart:()=> {},
        increaseQty:()=> {},
        decreaseQty:()=> {},
    }
})


export const {addToCart,removeFromCart,clearCart,increaseQty,decreaseQty} = cartSlice.actions
export default cartSlice.reducer