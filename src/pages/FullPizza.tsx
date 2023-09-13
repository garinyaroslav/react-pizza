import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
