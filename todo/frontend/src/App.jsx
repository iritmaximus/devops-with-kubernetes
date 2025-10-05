import { useState } from 'react'
import './App.css'

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

const App = () => {
  const [todos, setTodos] = useState(["moi", "hei", "teeppä jotain"])
  const [newTodo, setNewTodo] = useState("")

  const imgUrl = backendUrl + "/randImg.jpg"
  console.log("Imageurl:", imgUrl)

  const handleSubmit = e => {
    e.preventDefault();
    if (newTodo.length < 140)
      setTodos(todos.concat(newTodo))
    else {
      console.log("Too long todo")
    }
    setNewTodo("")
  }

  return (
    <>
      <h1>Project app :)!</h1>
      <img src={imgUrl} width="500" height="500" alt="Nice random image :)"/>
      <form method="post" onSubmit={handleSubmit}>
        <input name="new-todo" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button type="submit">Save</button>
      </form>
      <ul>
        {todos.map(todo => <li>{todo}</li>)}
      </ul>
    </>
  )
}

export default App
