import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import NotFound from './Pages/Not-found'

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
