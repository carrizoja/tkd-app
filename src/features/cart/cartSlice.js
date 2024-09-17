import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    total: 0,
    };


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const {id, price, quantity} = action.payload;
            const itemFound = state.items.find(item => item.id === id);
            itemFound
                ? itemFound.quantity += quantity
                :
                state.items.push(action.payload);
                state.total += price * quantity;
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
        },
        removeItemFromCart: (state, action) => {
            const itemId = action.payload;
            const itemFound = state.items.find(item => item.id === itemId);
            if (itemFound) {
              state.total -= itemFound.price * itemFound.quantity;
              state.items = state.items.filter(item => item.id !== itemId);
            }
          }
    },
});

export const { addToCart, clearCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
