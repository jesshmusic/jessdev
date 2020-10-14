import { PropTypes } from 'prop-types'
import { camelize } from '../lib/utilities'
import CardContent from './cards/CardContent'
import ExternalLinkCard from './cards/ExternalLinkCard'
import DefaultCard from './cards/DefaultCard'
import InternalLinkCard from './cards/InternalLinkCard'

const CardComponent = (props) => {
  const cardID = `card-${camelize(props.title)}`
  const cardContentID = `card-${camelize(props.title)}-content`
  const cardTarget = `#${cardID}-content`

  if (props.isInternalLink) {
    return (
      <InternalLinkCard siteLink={props.siteLink} cardID={cardID} cardTarget={cardTarget} className={props.className}>
        <CardContent {...props} cardContentID={cardContentID}/>
      </InternalLinkCard>
    )
  } else if (props.siteLink) {
    return (
      <ExternalLinkCard siteLink={props.siteLink} cardID={cardID} cardTarget={cardTarget} className={props.className}>
        <CardContent{...props} cardContentID={cardContentID} />
      </ExternalLinkCard>
    )
  }
  return (
    <DefaultCard cardID={cardID} cardTarget={cardTarget} className={props.className}>
      <CardContent{...props} cardContentID={cardContentID} />
    </DefaultCard>
  )
}
CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  isInternalLink: PropTypes.bool,
  siteLink: PropTypes.string,
  className: PropTypes.string.isRequired
}

export default CardComponent
