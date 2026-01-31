import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './componets/Login';
import Register from './componets/Register';
import Dashboard from './componets/Dashboard';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>

         <Route path='/' element={<Login />}/>
         <Route path='/Register' element={<Register/>}/>
         <Route path='dashboard' element={<Dashboard/>}/>
         
       </Routes>
    </>
  )
}

export default App
