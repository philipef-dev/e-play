import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from "./components/Header"
import { GlobalStyle } from "./styles/global"
import Home from './pages/Home'
import Categories from './pages/Categories'

const Rotas = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='categories' element={<Categories />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
