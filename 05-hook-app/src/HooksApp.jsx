import { useState } from "react"
import {useCounter} from './hooks/useCounter'


export const HooksApp = () => {
  const {increment, decrement, counter} = useCounter();
  // const [value, setValue] = useState(0);

  // const incre = () => {
  //   setValue(value + 1)
  // }
  // const decre = () => {}


  return (
    <>
      <div>HooksApp</div>

      <pre>{counter}</pre>
      
      <button onClick={() => decrement()} >Prev</button>
      <button onClick={() => increment()} >Next</button>
    
    </>
  )
}
