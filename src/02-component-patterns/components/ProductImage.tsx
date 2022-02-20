import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import noimage from '../assets/no-image.jpg'
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = '' }) => {
  const { product } = useContext(ProductContext)
  const imgToShow = img ?? product.img;
  
  return (
    <img className={styles.productImg} src={imgToShow || noimage} alt="" />
  )
}