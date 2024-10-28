import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from "./components/Header"
import { GlobalStyle } from "./styles/global"
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
      <GlobalStyle />
    </>
  )
}

export default App
