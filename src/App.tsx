import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from "./components/Banner"
import Header from "./components/Header"
import { GlobalStyle } from "./styles/global"
import ProductsList from './components/ProductList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductsList title="Promoções" background='gray' />
      </>
    )
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
