import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import NotFound from './Pages/Not-found'
import { createContext, useState } from 'react'

export const SearchContext = createContext('')

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <SearchContext.Provider value={ {searchValue, setSearchValue} }>
      <div className="wrapper">
        <BrowserRouter>
          <Header />
          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home searchValue={searchValue} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </SearchContext.Provider>
  )
}

export default App
