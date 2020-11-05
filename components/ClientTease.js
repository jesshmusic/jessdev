import CardComponent from './CardComponent'
import { PropTypes } from 'prop-types'

const ClientTease = ({ name, subtitle, description, logo, siteLink }) => (
  <CardComponent title={name}
    description={description}
    image={logo}
    subtitle={subtitle}
    siteLink={siteLink}
    cardType={'Client'}
    className={'client-card'} />
)

ClientTease.propTypes = {
  name: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  logo: PropTypes.object,
  siteLink: PropTypes.string
}

export default ClientTease
