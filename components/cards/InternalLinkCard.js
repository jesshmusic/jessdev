import Link from 'next/link'
import styles from '../Card.module.scss'
import { hoverEffectIn, hoverEffectOut } from '../../lib/animations'
import { PropTypes } from 'prop-types'

const InternalLinkCard = ({ children, cardID, siteLink, cardTarget, className }) => (
  <Link href={siteLink}>
    <a className={ `${styles.card} ${className}` }
      id={cardID}
      onMouseEnter={() => hoverEffectIn(cardTarget)}
      onMouseLeave={() => hoverEffectOut(cardTarget)}>
      { children }
    </a>
  </Link>
)
InternalLinkCard.propTypes = {
  children: PropTypes.element.isRequired,
  cardID: PropTypes.string.isRequired,
  siteLink: PropTypes.string.isRequired,
  cardTarget: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default InternalLinkCard
