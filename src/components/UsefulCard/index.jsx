import styles from './styles.module.css';

import UsefulImage1 from '@assets/images/usefulImg1.png';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../redux/actions/news';
import { useTranslation } from 'react-i18next';

const usefulCardData = [
  {
    image: UsefulImage1,
  }
];

const UsefulCard = () => {
  const {i18n} = useTranslation();
  const lang = i18n.language;
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.newsInfo) 
  useEffect(() => {dispatch(getNews())}, [])
 
  return (
    <>
      {news?.items.map((newsCard) => {
        console.log(newsCard?.translations);
        return (
          <div key={newsCard?.id} className={styles.usefulCard}>
            <img className={styles.usefulImage} src={newsCard?.image} alt='ship' />
            <p className={styles.usefulDate}>2.06.2023</p>
            <p className={styles.usefulCard_name}>
              {newsCard?.translations[lang]?.content}
            </p>
            <p className={styles.usefulCard_text}>
              {newsCard?.translations[lang]?.description}
            </p>
            <p className={styles.usefulCard_more}>Подробно</p>
          </div>
        );
      })}
    </>
  );
};

export default UsefulCard;
