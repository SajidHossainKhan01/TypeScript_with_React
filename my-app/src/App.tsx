import './App.css'
import { useState } from "react"
import { Card } from './Card'

function App() {
  const [count, setCount] = useState()

  return (
    <>
      <Card setCount={setCount} />
    </>
  )
}

export default App
