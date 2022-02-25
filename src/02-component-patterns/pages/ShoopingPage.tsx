import { ProductButtons, ProductImage, ProductTitle, default as ProductCard } from '../components';
import '../styles/custom-styles.css'
import { useShoopingCart } from '../hooks/useShoopingCart';

export const ShoopingPage = () => {
  
  const  { shoppingCart, onProductCountChange, products } = useShoopingCart()

  return (
    <div >
      <h1>ShoopingPage</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }} >
       
        {
          products.map(product => (
            <ProductCard key={product.id} product={product} className="bg-dark white-text" 
                onChange={onProductCountChange} 
                value={shoppingCart[product.id]?.counter}
              >
                <ProductImage className="custom-image" />
                <ProductTitle className="white-text"/>
                <ProductButtons className="custom-buttons" />
              </ProductCard>
          ))
        }

      </div>

      <div className='shopping-cart'>
        {Object.entries(shoppingCart).map(([indx, product]) => 
         <ProductCard key={product.id} product={product} 
          className="bg-dark white-text"
          style={{ width: '100px' }} 
          onChange={onProductCountChange} 
          value={product.counter}
        >
          <ProductImage className="custom-image" />
          <ProductButtons className="custom-buttons" style={{ display: 'flex', justifyContent: 'center' }} />
        </ProductCard>)}
       
      </div>
    </div>
  )
}
