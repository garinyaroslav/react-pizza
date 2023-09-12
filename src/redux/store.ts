import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import filterReduser from './filter/slice';
import cartReduser from './cart/slice';
import pizzaReduser from './pizza/slice';

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
