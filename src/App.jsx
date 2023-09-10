import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  function handleClick(){
    alert('button clicked')
  }

const handleClick2 = () => {
  alert('clicked')
}

const adding5 = (num) => {
  alert(num+5);
}

  return (
    <>
  
      <h3>React Core Concepts 2</h3>
  {/* <button onClick={handleClick}>Click me</button>
    */}
  <button onClick={handleClick}>Click me</button>
   <button onClick={handleClick2}>Click2</button>
   <button onClick={()=>{
    alert('third')
   }}>click 3</button>
   <button onClick={()=> adding5(3)}>click 4</button>
    </>
  )
}

export default App
