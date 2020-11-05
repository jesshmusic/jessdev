import styles from '../Card.module.scss'
import ReactMarkdown from 'react-markdown'
import { PropTypes } from 'prop-types'

const CardContent = ({ title, description, image, subtitle, cardContentID, cardType }) => (
  <div className={styles.cardContent}>
    <div className={ styles.image } style={ { backgroundImage: `url('${image.url}')` } }/>
    <div className={ styles.header }>
      <div className={ styles.headerText }>
        <div className={ styles.cardType }>{cardType}</div>
        <h3 className={ styles.title }>{ title }</h3>
        { subtitle ? <h4 className={ styles.subtitle }>{ subtitle }</h4> : null }
      </div>
      <div className={ styles.content } id={cardContentID}>
        <ReactMarkdown source={ description }/>
      </div>
    </div>
  </div>
)
CardContent.propTypes = {
  cardType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.object.isRequired,
  subtitle: PropTypes.string,
  cardContentID: PropTypes.string.isRequired
}

export default CardContent
