import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import './index.css'
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
