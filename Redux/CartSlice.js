const { createSlice } = require("@reduxjs/toolkit");

const CartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addCarts: (state, action) => {
            let myIndex = -1;
            state.map( (item,index) => {
                if (item.id == action.payload.id) {
                    myIndex = index
                }
            })
            if (myIndex == -1) {
                state.push(action.payload)
            } else {
                state[myIndex].qty = 0;
                state[myIndex].qty = action.payload.qty;
            }
        },
        removeCart: (state,action) => {
            return state.filter( (item) => item.id !== action.payload.id)
        },
        plusCart: (state,action) => {
            let myIndex = -1;
            state.map( (item,index) => {
                if (item.id == action.payload.id) {
                    myIndex = index
                }
            })
            if (myIndex !== -1) {
                state[myIndex].qty = state[myIndex].qty + 1;
            }        
        },
        minusCart: (state,action) => {
            let myIndex = -1;
            state.map( (item,index) => {
                if (item.id == action.payload.id) {
                    myIndex = index
                }
            })
            if (myIndex !== -1) {
                state[myIndex].qty = state[myIndex].qty - 1;
            }        
        },
        emptyArray: (state) => {
            state.length = 0;
        },
    }
})

export const {addCarts , removeCart , plusCart, minusCart,emptyArray} = CartSlice.actions;
export default CartSlice.reducer;