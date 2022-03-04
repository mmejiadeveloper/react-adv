import { useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from "../styles/styles.module.css";

export interface Props {
  className?: string
  style?: React.CSSProperties
}

export const ProductButtons = ({className, style}: Props) => {
  const { counter, increaseBy, maxCount} = useContext(ProductContext)

  const isMaximumReached = useCallback(
    () => !!maxCount && counter >= maxCount,
    [counter, maxCount],
  )
    
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style} >
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus} >-</button>
      <div className={styles.countLabel} >{counter}</div>
      <button 
        disabled={isMaximumReached()} onClick={() => increaseBy(+1)} 
        className={`${styles.buttonAdd} ${isMaximumReached() && styles.disabled} `} >+</button>
    </div>
  )
}