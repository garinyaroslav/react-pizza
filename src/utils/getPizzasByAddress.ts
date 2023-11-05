import { SearchPizzaParams } from '../redux/pizza/types';

// `http://localhost:3001/items?${category}${search}&_sort=${sortBy}&_order=${order}&_limit=4&_page=${currentPage}`
export const getPizzaByAddress = ({
  category,
  sortBy,
  order,
  search,
  currentPage,
}: SearchPizzaParams) => {
  return `https://64d8ebbe5f9bf5b879ceb297.mockapi.io/items?${category}${search}&sortBy=${sortBy}&order=${order}&limit=4&page=${currentPage}`;
};

export const getPizzaAddress = (): string => {
  return 'https://64d8ebbe5f9bf5b879ceb297.mockapi.io';
};
