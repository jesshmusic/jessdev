import CardComponent from './CardComponent'
import { PropTypes } from 'prop-types'

const TechTease = ({ title, subtitle, description, logo }) => (
  <CardComponent title={title}
    description={description}
    image={logo}
    cardType={'Tech'}
    subtitle={subtitle}
    className={'tech-card'} />
)

TechTease.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.object.isRequired
}

export default TechTease
