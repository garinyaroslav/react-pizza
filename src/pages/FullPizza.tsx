import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { getPizzaAddress } from '../utils/getPizzasByAddress';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const navigate = useNavigate();
  const { id } = useParams();
  const pizzaAddress = getPizzaAddress();

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${pizzaAddress}/items?id=${id}`);
        setPizza(data[0]);
      } catch (error) {
        console.error(error);
        navigate('/');
      }
    })();
  }, []);

  if (!pizza) return <div className="container">Загрузка...</div>;
  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
      <Link to="/react-pizza">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
