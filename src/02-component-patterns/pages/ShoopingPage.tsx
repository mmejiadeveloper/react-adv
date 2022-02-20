import { ProductButtons, ProductImage, ProductTitle, default as ProductCard } from '../components';

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
}

export const ShoopingPage = () => {

  return (
    <div>
      <h1>ShoopingPage</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }} >
        <ProductCard product={product}>
          <ProductImage img={product.img} />
          <ProductTitle title={product.title} />
          <ProductButtons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={'RND TITLE'} />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  )
}
