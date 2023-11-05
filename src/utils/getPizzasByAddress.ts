import { SearchPizzaParams } from '../redux/pizza/types';

// `http://localhost:3001/items?${category}${search}&_sort=${sortBy}&_order=${order}&_limit=4&_page=${currentPage}`
export const getPizzaByAddress = ({
  category,
  sortBy,
  order,
  search,
  currentPage,
}: SearchPizzaParams) => {
  return `${process.env.MockapiUrl}/items?${category}${search}&sortBy=${sortBy}&order=${order}&limit=4&page=${currentPage}`;
};

export const getPizzaAddress = (): string => {
  return `${process.env.MockapiUrl}`;
};
