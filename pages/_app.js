// Styles
import "styles/globals.css"
// Components
import Layout from "@/layout/index"
import Theme from "styles/styled-components/theme"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  )
}

export default MyApp
