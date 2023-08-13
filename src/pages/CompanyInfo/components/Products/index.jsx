import styles from './styles.module.css'
import ProductCard from "@components/ProductCard/index.jsx";
import EmptyProducts from "../EmptyProducts";
import Recommended from "@pages/CompanyInfo/components/Recommended/index.jsx";
import { useSelector } from 'react-redux';


const Products = ({length}) =>{
  const {selectedCompanyProducts} = useSelector(state => state.product)
  console.log(selectedCompanyProducts);
  return (
    <>
      {!selectedCompanyProducts?.length
      ?
        <div>
          <EmptyProducts/>
          <Recommended/>
        </div>
       : 
      <div>
        <h2 className={styles.productsTitle}>
          Все товары
        </h2>

        <div className={styles.productsList}>
          {selectedCompanyProducts.map((product) => {
            return (
              <ProductCard product={product}/>
            )
            
          })}
    
        </div>
      </div> 
      }
      
      
      
    </>
  )
}


export default Products