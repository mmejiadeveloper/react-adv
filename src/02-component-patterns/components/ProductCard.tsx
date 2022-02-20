import { createContext } from "react";

import { useProduct } from '../hooks/useProduct';
import { IProductContext, ProductCardProps } from '../interfaces/interfaces';

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as IProductContext)
const { Provider } = ProductContext


export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{counter, increaseBy, product}} >
      <div className={styles.productCard} >
        {children ?? null}
      </div>
    </Provider>
  )
}
