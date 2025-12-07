import { configureStore } from '@reduxjs/toolkit'
import { buyCartReducer, buyNowReducer, cartReducer, productReducer, wishListReducer } from './actions'
export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    wishList: wishListReducer,
    buyNow: buyNowReducer,
    buyCart: buyCartReducer,
  },
})
