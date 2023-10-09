const {createSlice} = require('@reduxjs/toolkit');

export const FavItemSlice = createSlice({
  name: 'favItem',
  initialState: [],
  reducers: {
    addFavItem: (state, action) => {
      let myIndex = -1;
      state.map((item, index) => {
        if (item == action.payload.id) {
          myIndex = index;
        }
      });
      if (myIndex == -1) {
        state.push(action.payload.id);
      }
    },
    removeFavItem: (state, action) => {
      return state.filter(item => item !== action.payload.id);
    },
  },
});

export const {addFavItem, removeFavItem} = FavItemSlice.actions;
export default FavItemSlice.reducer;
