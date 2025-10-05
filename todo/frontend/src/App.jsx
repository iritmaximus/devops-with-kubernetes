import { useState } from 'react'
import './App.css'

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

const App = () => {
  const [count, setCount] = useState(0)

  const imgUrl = backendUrl + "/randImg.jpg"
  console.log("Imageurl:", imgUrl)

  return (
    <>
      <h1>Project app :)!</h1>
      <img src={imgUrl} width="500" height="500" alt="Nice random image :)"/>
    </>
  )
}

export default App
