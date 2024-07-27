import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componets/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    username: "himan",
    age : 23
  }

  let newArray = [1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '> Tailwindcss test</h1>
   
   <Card channel="maggie&masala" someobjet ={newArray} />
   <Card />

    
    </>
  )
}

export default App
