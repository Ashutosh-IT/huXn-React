import { useQuery } from "@tanstack/react-query";

const FetchRQ = () => {

  const fetchData = async() => {
    const res = await fetch('https://dummyjson.com/products');
    const json = await res.json();
    return json.products;
  }

  const {data} = useQuery({
    queryKey : ['products'],
    queryFn : fetchData
  });


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

export default FetchRQ