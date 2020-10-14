import styles from '../Card.module.scss'
import { hoverEffectIn, hoverEffectOut } from '../../lib/animations'
import { PropTypes } from 'prop-types'

const ExternalLinkCard = ({ children, cardID, siteLink, cardTarget, className }) => (
  <a className={ `${styles.card} ${className}` }
    id={cardID}
    href={ siteLink }
    rel={ 'noreferrer noopener' }
    onMouseEnter={() => hoverEffectIn(cardTarget)}
    onMouseLeave={() => hoverEffectOut(cardTarget)}
    target={ '_blank' }>
    { children }
  </a>
)
ExternalLinkCard.propTypes = {
  children: PropTypes.element.isRequired,
  cardID: PropTypes.string.isRequired,
  siteLink: PropTypes.string.isRequired,
  cardTarget: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default ExternalLinkCard
