import Header from './components/Header'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [pizza, setPizza] = useState([])

  async function getPizza() {
    await fetch('http://localhost:5173/db.json')
          .then(res => res.json())
          .then(data => setPizza(data.pizzas))
          .catch(err => console.log(err))
  }

  useEffect(() => {
    console.log('aaaa');
    getPizza()
  },[])

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element = {<Home items={pizza}/>}/>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
