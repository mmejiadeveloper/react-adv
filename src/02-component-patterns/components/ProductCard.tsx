import { createContext, CSSProperties } from "react";

import { useProduct } from '../hooks/useProduct';
import { IInitialValues, IProductContext, onChangeArgs, Product, IProductCardHandlers } from '../interfaces/interfaces';

import styles from "../styles/styles.module.css";

export interface Props {
  product: Product;
  // children?: ReactElement[]
  children: (args: IProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: IInitialValues
}


export const ProductContext = createContext({} as IProductContext)
const { Provider } = ProductContext


export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {
  const { 
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset
  } = 
  useProduct( {onChange, product, value, initialValues} )
  
  return (
    <Provider value={{ counter, increaseBy, product, maxCount: maxCount}} >
      <div className={`${styles.productCard} ${className}`} style={style}  >
      {children({
        count: counter,
        isMaxCountReached,
        maxCount,
        product,
        increaseBy,
        reset
      })}
    </div>
    </Provider >
  )
}
