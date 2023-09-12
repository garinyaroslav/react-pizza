import { createAsyncThunk } from '@reduxjs/toolkit';
import { SearchPizzaParams, Pizza } from './types';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params: SearchPizzaParams) => {
    const { category, sortBy, order, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `http://localhost:3001/items?${category}${search}&_sort=${sortBy}&_order=${order}&_limit=4&_page=${currentPage}`,
    );
    return data;
  },
);
