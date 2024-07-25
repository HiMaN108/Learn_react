import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return (
    <div>
      <h1> Cutom Apps !</h1>
    </div>
  )
}

const anotherElement = (
  <a href='https://google.com.com' target='_blank'> VISIT google </a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
anotherElement

)
