import {combineReducers, configureStore} from "@reduxjs/toolkit"
import persistReducer from "redux-persist/es/persistReducer";
import AsyncStorage from '@react-native-async-storage/async-storage';


import { 
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,        
} from "redux-persist";

import ProductSlice from "./ProductSlice";
import CartSlice from "./CartSlice";
import FavSlice from "./FavSlice";
import FavItemSlice from "./FavItemSlice";


let persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

let rootReducer = combineReducers({
    product: ProductSlice,
    cart: CartSlice,
    favorite: FavSlice,
    favorite_product: FavItemSlice,    
})
const persistedReducer = persistReducer(persistConfig, rootReducer);


const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

const Persistor = persistStore(Store)

export {Store , Persistor};