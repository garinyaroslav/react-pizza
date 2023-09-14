import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getPizzaByAddress } from '../../utils/getPizzasByAddress';
import { SearchPizzaParams, Pizza } from './types';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params: SearchPizzaParams) => {
    const getPizza = getPizzaByAddress(params);
    const { data } = await axios.get<Pizza[]>(getPizza);
    return data;
  },
);
