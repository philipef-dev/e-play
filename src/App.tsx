import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from "./components/Banner"
import Header from "./components/Header"
import { GlobalStyle } from "./styles/global"

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Banner/>
  }
])

function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas}/>
      <GlobalStyle />
    </>
  )
}

export default App
