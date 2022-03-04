import { ProductButtons, ProductImage, ProductTitle, default as ProductCard } from '../components';
import '../styles/custom-styles.css'
import { products } from '../data/products';

const [ product ] = products

export const ShoopingPage = () => {
  
  return (
    <div >
      <h1>ShoopingPage</h1>
      <hr />

      <ProductCard 
          key={product.id} 
          product={product} 
          className="bg-dark white-text"
          initialValues={{
            count: 4,
            maxCount: 10
          }}   
        >
          { 
            ({reset, isMaxCountReached, count, increaseBy}) => (<>
              <ProductImage className="custom-image" />
              <ProductTitle className="white-text"/>
              <ProductButtons className="custom-buttons" />
              <button onClick={reset} >Reset</button>

              {!isMaxCountReached && <button onClick={() => increaseBy(+2)} >+2</button>} 
              {count > 0 && <button onClick={() => increaseBy(-2)}>-2</button>}
             <span>{count}</span>

            </>)
          }
      </ProductCard>

    </div>
  )
}
