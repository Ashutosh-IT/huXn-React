import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const func = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };
    func();
  }, []);

  return data;
};

export default useFetch;
