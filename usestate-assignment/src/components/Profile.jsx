import { useState } from "react"

const Profile = () => {

  const [users,setUsers] = useState({
    name : "",
    age : ""
  })

  const [user,setUser] = useState({name:"",age : 0});

  const handleChange = (event) =>{
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  }
  
  const update = () => { 
    setUsers(user);
  }

  return (
    <div>
        <input type="text" name="name" placeholder="name" value={user.name} onChange={handleChange}/>
        <input type="number" name="age" placeholder="age" value={user.age} onChange={handleChange}/>

        <button onClick={update}>Update</button>

        <h1>{users.name}</h1>
        <h1>{users.age}</h1>
    </div>
  )
}

export default Profile