import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
   const  users =[{
    name:"spandan",
    roll:23
   },
   {
    name:"manasa",
    roll:24
   },
   {
    name:"rajesh",
    roll:25
   }
  ]

   let [display,setDisplay] =useState([])
   
   function handleClick()
  {
    setDisplay(users)
    console.log(display)
    
  }
  return (
    <>
       {display.map((user)=>(
        <div>
            <h1>{user.name}</h1>
            <h2>{user.roll}</h2>
        </div>
       ))   
       }
      
       <button type="button" className="btn btn-success" onClick={handleClick}>ShowOne</button>
       
    </>
  )
}

export default App
