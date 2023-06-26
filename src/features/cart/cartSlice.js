import {createSlice} from '@reduxjs/toolkit';

const localCart = JSON.parse(localStorage.getItem('cart'));

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        content: localCart
    },
    reducers: {
        add: (state, action) => {
            if(state.content == null){
                state.content = [];
            }
            state.content.push(action.payload);
            localStorage.setItem('cart',JSON.stringify(state.content));
        },
        reload: (state, action) => {
            state.content = action.payload;
            localStorage.setItem('cart',JSON.stringify(state.content));
        },
        remove: (state, action) => {
            const index = state.content.findIndex(cartProduct => cartProduct.id == action.payload.id);
            if(state.content != null && index != -1)
                state.content.splice(index,1);
            if(state.content.length == 0)
                state.content = null;
            localStorage.setItem('cart',JSON.stringify(state.content));
        },
        removeAll: (state) => {
            state.content = null;
            localStorage.removeItem('cart');
        }
    }
});

export const {add, reload, remove, removeAll} = cartSlice.actions;

export default cartSlice.reducer;