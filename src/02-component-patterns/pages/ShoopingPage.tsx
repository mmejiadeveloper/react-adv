import { ProductButtons, ProductImage, ProductTitle, default as ProductCard } from '../components';
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
}

export const ShoopingPage = () => {

  return (
    <div >
      <h1>ShoopingPage</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }} >
       
        <ProductCard product={product} className="bg-dark white-text" >
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title={'RND TITLE'} className="white-text" />
          <ProductCard.Buttons className="custom-buttons"/>
        </ProductCard>
        <ProductCard product={product} className="bg-dark white-text" >
          <ProductImage img={product.img} className="custom-image" />
          <ProductTitle title={product.title} className="white-text"/>
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product} style={{ backgroundColor: '#70D1F8' }} >
          <ProductImage img={product.img}  style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }}  />
          <ProductTitle title={product.title} style={{ fontWeight: 'bold' }} />
          <ProductButtons className="custom-buttons" style={{
            display: 'flex',
            justifyContent: 'end'
          }} />
        </ProductCard>
      </div>
    </div>
  )
}
