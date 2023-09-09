import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
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

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
