import { Routes, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Home from './pages/Home';
import { MainLayout } from './layouts/MainLayout';

import './scss/app.scss';

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart"*/ './pages/Cart'),
  loading: () => <div>Идёт загрузка корзины...</div>,
});

const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "NotFound"*/ './pages/NotFound'),
  loading: () => <div>Идёт загрузка пиццы...</div>,
});

const FullPizza = Loadable({
  loader: () => import(/* webpackChunkName: "FullPizza"*/ './pages/FullPizza'),
  loading: () => <div>Ничего не найдено...</div>,
});

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart/" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
