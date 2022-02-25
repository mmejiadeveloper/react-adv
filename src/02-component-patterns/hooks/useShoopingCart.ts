import { useState } from "react"
import { IProductInCart, Product } from "../interfaces/interfaces"
import { products } from '../data/products';

export const useShoopingCart = () => {
  const [shoppingCart, setShoopingCart] = useState<{ [key:string]: IProductInCart }>({})
  
  const onProductCountChange = ( {counter, product}: {counter: number, product: Product} ) => {
    setShoopingCart(prevShoopingCart => {

      const productInCart: IProductInCart = prevShoopingCart[product.id] || {...product, counter: 0 }
      if ( Math.max(productInCart.counter + counter, 0) > 0 ) {
        productInCart.counter += counter;
        return {...prevShoopingCart, [product.id]: productInCart}
      }

      const { [product.id]: toDelete, ...rest } = prevShoopingCart
      return rest
    })
    
  }
  return { shoppingCart, onProductCountChange, products }
}