const { createSlice } = require("@reduxjs/toolkit");

// const initialState = [
//     {
//         id: 1,
//         name: 'King Hamburger',
//         image: require('../Images/burgerfront.png'),
//         rate: '4.5',
//         price: '19.80',
//         qty: 1,
//         favorite: 0
//     }
// ]

// state.push(
//     state[myIndex].id = action.payload.id,
//     state[myIndex].name = action.payload.name,
//     state[myIndex].image = action.payload.image,
//     state[myIndex].favorite = action.payload.id,
//     state[myIndex].price = action.payload.price,
//     state[myIndex].qty = action.payload.qty,
//     state[myIndex].rate = action.payload.rate,
// );
// state.push(action.payload)

const FavSlice = createSlice({
    name: "fav",
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            let myIndex = -1
            state.map( (item,index) => {
                if (item.id == action.payload.id) {
                    myIndex = index
                }
            })
            if (myIndex == -1) {
                state.push(action.payload)
            } 
            else {
            }
        },
        removeFavorite: (state,action) => {
            return (state.filter(item => item.id !== action.payload) )
        },

    }
})

export const {addFavorite, removeFavorite} = FavSlice.actions;
export default FavSlice.reducer;