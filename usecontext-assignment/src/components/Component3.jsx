import { useContext } from "react"
import { data } from "./Component1"

const Component3 = () => {

  const user = useContext(data);
  return (
    <h1>My name is {user.name}. I am {user.age} years old</h1>
  )
}

export default Component3