import styles from "./Card.module.scss";
import ReactMarkdown from "react-markdown";
import { camelize } from "../lib/utilities";
import { hoverEffectIn, hoverEffectOut } from "../lib/animations";

const CardComponent = ( { title, description, image, subtitle, siteLink, className }) => {
  const cardID = `card-${camelize(title)}`;
  const cardTarget = `#${cardID}`;

  return (
    siteLink ? (
      <a className={ `${ styles.card } ${ className }` }
         id={cardID}
         href={ siteLink }
         rel={ 'noreferrer noopener' }
         onMouseEnter={() => hoverEffectIn(cardTarget)}
         onMouseLeave={() => hoverEffectOut(cardTarget)}
         target={ '_blank' }>
        <div className={ styles.header }>
          <h3 className={ styles.title }>{ title }</h3>
          { subtitle ? <h4 className={ styles.subtitle }>{ subtitle }</h4> : null }
        </div>
        <div className={ styles.image } style={ { backgroundImage: `url("${ image.url }")` } }/>
        <div className={ styles.content } id={`${cardID}-content`}>
          <ReactMarkdown source={ description }/>
        </div>
      </a>
    ) : (
      <div className={ `${ styles.card } ${ className }` }
           id={cardID}
           onMouseEnter={() => hoverEffectIn(cardTarget)}
           onMouseLeave={() => hoverEffectOut(cardTarget)}>
        <div className={ styles.header }>
          <h3 className={ styles.title }>{ title }</h3>
          { subtitle ? <h4 className={ styles.subtitle }>{ subtitle }</h4> : null }
        </div>
        <div className={ styles.image } style={ { backgroundImage: `url("${ image.url }")` } }/>
        <div className={ styles.content }>
          <ReactMarkdown source={ description }/>
        </div>
      </div>
    )
  );
}

export default CardComponent;
