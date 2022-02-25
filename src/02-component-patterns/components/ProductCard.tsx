import { createContext, CSSProperties, ReactElement } from "react";

import { useProduct } from '../hooks/useProduct';
import { IProductContext, onChangeArgs, Product } from '../interfaces/interfaces';

import styles from "../styles/styles.module.css";

export interface Props {
  product: Product
  children?: ReactElement[]
  className?: string
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}


export const ProductContext = createContext({} as IProductContext)
const { Provider } = ProductContext


export const ProductCard = ({ product, children, className, style, onChange, value }: Props) => {
  const { counter, increaseBy } = useProduct( {onChange, product, value} )
  
  return (
    <Provider value={{ counter, increaseBy, product }} >
      <div className={`${styles.productCard} ${className}`} style={style}  >
      {children ?? null}
    </div>
    </Provider >
  )
}
