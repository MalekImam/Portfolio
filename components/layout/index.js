import Header from "./Header"
import Footer from "./Footer"
import { Container } from "./LayoutStyles"

function Layout({ children }) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

export default Layout
