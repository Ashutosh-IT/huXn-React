import useFetch from "./hooks/useFetch";

const App = () => {

  const todo = useFetch('https://dummyjson.com/todos');
  
  return (
    <div>
      <h1>Todo</h1>
      {
        todo && todo.todos.map((t,index)=>{
          return <p key={index}>{t.todo}</p>;
        })
      }
      
    </div>
  )
}

export default App