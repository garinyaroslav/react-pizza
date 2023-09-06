import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/items/${id}`);
        setPizza(data);
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
    </div>
  );
};

export default FullPizza;
