import { ProductCard as ProductCardHOC } from './ProductCard';
import { IProductCardHOCProps } from '../interfaces/interfaces';

import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';


export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButtons';

export const ProductCard: IProductCardHOCProps  = Object.assign(
  ProductCardHOC,
  { 
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
  } 
)

export default ProductCard