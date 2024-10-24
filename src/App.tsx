import Banner from "./components/Banner"
import Header from "./components/Header"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Banner />
      <GlobalStyle />
    </>
  )
}

export default App
