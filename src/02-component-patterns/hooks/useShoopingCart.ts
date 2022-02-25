import { useState } from "react"
import { IProductInCart, Product } from "../interfaces/interfaces"
import { products } from '../data/products';

export const useShoopingCart = () => {
  const [shoppingCart, setShoopingCart] = useState<{ [key:string]: IProductInCart }>({})
  
  const onProductCountChange = ( {counter, product}: {counter: number, product: Product} ) => {
    setShoopingCart(prevShoopingCart => {
       if (counter > 0) {
        return {
          ...prevShoopingCart,
          [product.id]: { ...product, counter: counter }
        }
      }
      const { [product.id]: toDelete, ...rest } = prevShoopingCart
      return rest
    })
    
  }
  return { shoppingCart, onProductCountChange, products }
}