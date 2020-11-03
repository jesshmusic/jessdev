import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../styles/global.scss'
import { PropTypes } from 'prop-types'

const App = ({ Component, pageProps }) => <Component {...pageProps} />

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default App
