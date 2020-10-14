import styles from '../Card.module.scss'
import { hoverEffectIn, hoverEffectOut } from '../../lib/animations'
import { PropTypes } from 'prop-types'

const DefaultCard = ({ children, cardID, cardTarget, className }) => (
  <div className={ `${styles.card} ${className}` }
    id={cardID}
    onMouseEnter={() => hoverEffectIn(cardTarget)}
    onMouseLeave={() => hoverEffectOut(cardTarget)}>
    { children }
  </div>
)
DefaultCard.propTypes = {
  children: PropTypes.element.isRequired,
  cardID: PropTypes.string.isRequired,
  cardTarget: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default DefaultCard
