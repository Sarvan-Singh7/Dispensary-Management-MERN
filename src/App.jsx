import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import './App.css'
import Header from './components/Header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = 'App'>
      <Header/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
      </Routes>
    </div>
  )
}

export default App;
