import { useEffect, useRef, useState } from "react"


const Timer = () => {

  const [count,setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(()=>{
    intervalRef.current = setInterval(()=>{
        setCount(prev => prev+1);
    },1000);

    // cleanup function
    return ()=>{
        clearInterval(intervalRef.current);
    }
  },[]);

  return (
    <div>
        <h1>Timer : {count}</h1>
        <button onClick={()=>clearInterval(intervalRef.current)}>Stop Timer</button>
    </div>
  )
}

export default Timer