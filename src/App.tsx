import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Rotas from './routes'
import Header from './components/Header'
import Footer from './components/Footer'

import { GlobalStyle } from './styles/global'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App


// <https://www.figma.com/design/FiFpwvwwHX0rCbrXatjMg4/EPLAY?node-id=1-3&node-type=frame&t=g3ARArlQh7tUFSec-0>
