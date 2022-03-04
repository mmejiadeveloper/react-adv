import { useEffect, useRef, useState } from "react"
import { IInitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface onChangeProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: IInitialValues
}

export function useProduct ({onChange, product, value = 0, initialValues}: onChangeProductArgs){
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false)
  console.log(initialValues);
  
  const increaseBy = (value: number) => {
    const x = initialValues?.maxCount ? Math.min(counter + value , initialValues?.maxCount) : counter + value
    const newValue =  Math.max( x, 0)
    setCounter(newValue)
    onChange && onChange({ counter: newValue, product})
  }

  const reset = () => setCounter(initialValues?.count || value)

  useEffect(() => {
    if(!isMounted.current) return
    setCounter(value)
  }, [value])
  
  useEffect(() => {
    isMounted.current = true;
  }, [])
  
  return { 
    counter, 
    increaseBy, 
    isMaxCountReached: !!initialValues?.maxCount && counter >= initialValues?.maxCount,
    maxCount: initialValues?.maxCount,
    reset
  }
}