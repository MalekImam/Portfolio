import "styles/layout.css"
import "styles/globals.css"
import Header from "@/layout/Header"
import Footer from "@/layout/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
