import { useState } from "react"

const Counter = () => {
  const [counter,setCounter] = useState(0);

  const increment = ()=>{
    setCounter(counter+1);
  }
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={increment}>+</button>
    </div>
  )
}


export default Counter