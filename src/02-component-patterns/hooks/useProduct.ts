import { useState } from "react"

export function useProduct (){
  const [counter, setCounter] = useState(0)

  const increaseBy = (value: number) => {
    setCounter(preVal => Math.max( preVal + value, 0))
  }
  return { counter, increaseBy }
}