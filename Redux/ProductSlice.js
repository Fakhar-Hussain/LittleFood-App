const { createSlice } = require("@reduxjs/toolkit");

const initialState = [{
    name: "Fakhar Hussain",
    age: 22,
    status: "Programmer"
}]

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const {setProducts} = ProductSlice.actions;
export default ProductSlice.reducer;