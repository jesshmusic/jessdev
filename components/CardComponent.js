import styles from "./Card.module.scss";
import ReactMarkdown from "react-markdown";
import { camelize } from "../lib/utilities";
import { hoverEffectIn, hoverEffectOut } from "../lib/animations";
import Link from 'next/link'

const CardContent = ( { title, description, image, subtitle, cardID } ) => (
  <>
    <div className={ styles.header }>
      <h3 className={ styles.title }>{ title }</h3>
      { subtitle ? <h4 className={ styles.subtitle }>{ subtitle }</h4> : null }
    </div>
    <div className={ styles.image } style={ { backgroundImage: `url("${ image.url }")` } }/>
    <div className={ styles.content } id={`${cardID}-content`}>
      <ReactMarkdown source={ description }/>
    </div>
  </>
)

const InternalLinkCard = ({children, cardID, siteLink, cardTarget, className}) => (
  <Link href={siteLink}>
    <a className={ `${ styles.card } ${ className }` }
       id={cardID}
       onMouseEnter={() => hoverEffectIn(cardTarget)}
       onMouseLeave={() => hoverEffectOut(cardTarget)}>
      { children }
    </a>
  </Link>
)

const ExternalLinkCard = ({children, cardID, siteLink, cardTarget, className}) => (
  <a className={ `${ styles.card } ${ className }` }
     id={cardID}
     href={ siteLink }
     rel={ 'noreferrer noopener' }
     onMouseEnter={() => hoverEffectIn(cardTarget)}
     onMouseLeave={() => hoverEffectOut(cardTarget)}
     target={ '_blank' }>
    { children }
  </a>
)

const DefaultCard = ({children, cardID, cardTarget, className}) => (
  <div className={ `${ styles.card } ${ className }` }
       id={cardID}
       onMouseEnter={() => hoverEffectIn(cardTarget)}
       onMouseLeave={() => hoverEffectOut(cardTarget)}>
    { children }
  </div>
)

const CardComponent = (props) => {
  const cardID = `card-${camelize(props.title)}`;
  const cardTarget = `#${cardID}`;

  if ( props.isInternalLink ) {
    return (
      <InternalLinkCard siteLink={props.siteLink} cardID={cardID} cardTarget={cardTarget} className={props.className}>
        <CardContent {...props} />
      </InternalLinkCard>
    );
  } else if ( props.siteLink ) {
    return (
      <ExternalLinkCard siteLink={props.siteLink} cardID={cardID} cardTarget={cardTarget} className={props.className}>
        <CardContent{...props} />
      </ExternalLinkCard>
    );
  }
  return <DefaultCard cardID={cardID} cardTarget={cardTarget} className={props.className}><CardContent{...props} /></DefaultCard>;
}

export default CardComponent;
