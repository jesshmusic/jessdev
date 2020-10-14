import { PropTypes } from 'prop-types'
import { camelize } from '../lib/utilities'
import CardContent from './cards/CardContent'
import ExternalLinkCard from './cards/ExternalLinkCard'
import DefaultCard from './cards/DefaultCard'
import InternalLinkCard from './cards/InternalLinkCard'

const CardComponent = (props) => {
  const cardID = `card-${camelize(props.title)}`
  const cardTarget = `#${cardID}`

  if (props.isInternalLink) {
    return (
      <InternalLinkCard siteLink={props.siteLink} cardID={cardID} cardTarget={cardTarget} className={props.className}>
        <CardContent {...props} />
      </InternalLinkCard>
    )
  } else if (props.siteLink) {
    return (
      <ExternalLinkCard siteLink={props.siteLink} cardID={cardID} cardTarget={cardTarget} className={props.className}>
        <CardContent{...props} />
      </ExternalLinkCard>
    )
  }
  return <DefaultCard cardID={cardID} cardTarget={cardTarget} className={props.className}><CardContent{...props} /></DefaultCard>
}
CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  isInternalLink: PropTypes.bool,
  siteLink: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default CardComponent
