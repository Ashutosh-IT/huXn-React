import { useState } from "react"

const TodoList = () => {

  const [todo,setTodo] = useState([]);
  const [data,setData] = useState("");

  const handleInput = (event) => {
    setData(event.target.value);
  }

  const addTodo = () => {
    if(data.length === 0) return;
    setTodo([...todo,data]);
  }

  return (
    <div>
        <input type="text" placeholder="add todo" value={data} onChange={handleInput}/>
        <button onClick={addTodo}>Add</button>

        <h1>TODO'S</h1>
        {
            todo.map((t,index) => (
                <p key={index}>{t}</p>
            ))
        }
    </div>
  )
}

export default TodoList