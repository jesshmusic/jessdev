import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../styles/global.scss'
import { PropTypes } from 'prop-types'
import Layout from '../components/layout'

const App = ({ Component, pageProps, router }) => (
  <Layout>
    <Component {...pageProps} key={router.route} />
  </Layout>
)

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  router: PropTypes.object
}

export default App
