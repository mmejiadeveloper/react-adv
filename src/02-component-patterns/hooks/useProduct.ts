import { useEffect, useRef, useState } from "react"
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface onChangeProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export function useProduct ({onChange, product, value = 0}: onChangeProductArgs){
  const [counter, setCounter] = useState(value);

  const isControlled = useRef( !!onChange )
  
  const increaseBy = (value: number) => {

    if  (isControlled && onChange) return onChange({ counter: value, product})

    const newValue =  Math.max( counter + value, 0)
    setCounter(newValue)
   
    
    onChange && onChange({ counter: newValue, product})
  }

  useEffect(() => {
    setCounter(value)

  }, [value])
  
  return { counter, increaseBy }
}