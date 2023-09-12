import { CartItem } from '../redux/cart/types';

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
};
