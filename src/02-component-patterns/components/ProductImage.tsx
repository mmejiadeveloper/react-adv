import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import noimage from '../assets/no-image.jpg'
import styles from "../styles/styles.module.css";

export interface Props {
  img?: string
  className?: string
  style?: React.CSSProperties
}

export const ProductImage = ({ img = '', className, style }: Props) => {
  const { product } = useContext(ProductContext)
  const imgToShow = img ?? product.img;
  
  return (
    <img className={`${styles.productImg} ${className}`} src={imgToShow || noimage} alt="" style={style}  />
  )
}