import Banner from "./components/Banner"
import Header from "./components/Header"
import { Container, GlobalStyle } from "./styles/global"

function App() {
  return (
    <>
      <Container>
        <Header />
        <Banner />
      </Container>
      <GlobalStyle />
    </>
  )
}

export default App
