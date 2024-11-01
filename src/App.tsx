import { BrowserRouter } from 'react-router-dom'

import Header from "./components/Header"
import { GlobalStyle } from "./styles/global"
import Rotas from './routes'



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
