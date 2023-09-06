import { configureStore } from '@reduxjs/toolkit';
import filterReduser from './slices/filterSlice';
import cartReduser from './slices/cartSlice';
import pizzaReduser from './slices/pizzaSlice';

export const store = configureStore({
  reducer: {
    filter: filterReduser,
    cart: cartReduser,
    pizza: pizzaReduser,
  },
});
