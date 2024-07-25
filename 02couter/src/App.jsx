import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  let [counter , setCounter] = useState(15)
  // let counter =15;

  const addvalue = () =>{
    if(counter>19){
      setCounter(counter=20)
    }else{
   
    setCounter(counter + 1)
    }
  }

  const remvalue = () => {
    if(counter==0){
      setCounter(counter=0)
    }else{
    setCounter(counter-1)
    }
  }
  return (
    <>
     <h1> maggie and react</h1>
     <h2> couter value: {counter}</h2>
     <button onClick={addvalue}> Add value</button>
     <br/>
     <button  onClick={remvalue}>  remove value</button>
    </>
  )
}

export default App
