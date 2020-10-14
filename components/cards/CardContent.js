import styles from '../Card.module.scss'
import ReactMarkdown from 'react-markdown'
import { PropTypes } from 'prop-types'

const CardContent = ({ title, description, image, subtitle, cardID }) => (
  <div className={styles.cardContent}>
    <div className={ styles.image } style={ { backgroundImage: `url('${image.url}')` } }/>
    <div className={ styles.header }>
      <h3 className={ styles.title }>{ title }</h3>
      { subtitle ? <h4 className={ styles.subtitle }>{ subtitle }</h4> : null }
    </div>
    <div className={ styles.content } id={`${cardID}-content`}>
      <ReactMarkdown source={ description }/>
    </div>
  </div>
)
CardContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.object.isRequired,
  subtitle: PropTypes.string,
  cardID: PropTypes.string.isRequired
}

export default CardContent
