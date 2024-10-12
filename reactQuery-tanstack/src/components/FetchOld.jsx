import { useState,useEffect } from "react"

const FetchOld = () => {

  const [data,setData] = useState(null);


  const fetchData = async() => {
    const res = await fetch('https://dummyjson.com/products');
    const json = await res.json();
    setData(json.products);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className="main">
        {data && data.map((item)=>{
            return (
                <div key={item.id} className="product">
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                </div>
            )
        })}
    </div>
  )
}

export default FetchOld