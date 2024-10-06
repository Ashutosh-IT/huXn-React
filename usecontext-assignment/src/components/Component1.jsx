import { createContext } from "react";
import Component2 from './Component2'

export const data = createContext();


const Component1 = () => {

  const user = {
    name : "Ashu",
    age : 20
  }

  return (
    <data.Provider value={user}>
        <div>
            <Component2/>
        </div>
    </data.Provider>
  )
}

export default Component1