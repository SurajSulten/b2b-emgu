import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from "react";
import ProductCard from '@components/ProductCard/index.jsx';
import Carousel from '@components/Carousel/index.jsx';
import { getPopularProducts } from '@/redux/actions/product.js';
import styles from './styles.module.css';

const PopularProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { newProducts } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getPopularProducts());
  }, []);

  const renderProductCards = (products) => {
    return products.map((product) => <ProductCard product={product} key={product.id} />);
  };
  return (
    <div className={styles.layoutBg}>
      <div className={'container ' + styles.newProductContainer}>
        <h3 className={styles.newProduct_title}>Популярные товары</h3>
        <div>
          <Carousel slides={renderProductCards(newProducts.items)} />
        </div>
        
        <button onClick={() => navigate('/product')} className={styles.newProduct_button}>
          Посмотреть больше продуктов
        </button>
      </div>
    </div>
  );
};

export default PopularProduct;
