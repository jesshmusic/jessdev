import CardComponent from './CardComponent'
import { PropTypes } from 'prop-types'

const TechTease = ({ title, description, logo }) => (
  <CardComponent title={title}
    description={description}
    image={logo}
    className={'tech-card'} />
)

TechTease.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.object.isRequired
}

export default TechTease
