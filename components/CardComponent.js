import styles from "./Card.module.scss";
import ReactMarkdown from "react-markdown";
import gsap from "gsap";

const camelize = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

const CardComponent = ( { title, description, image, subtitle, siteLink, className }) => {
  const cardID = `card-${camelize(title)}`;
  const onMouseEnter = () => {
    gsap.to(`#${cardID}`, {
      duration: 0.5,
      backgroundColor: '#CDB48D',
      opacity: 1,
      scale: 0.98,
      ease: 'power1.out'
    });
  }
  const onMouseLeave = () => {
    gsap.to(`#${cardID}`, {
      duration: 1,
      backgroundColor: '#fff',
      opacity: 0.75,
      scale: 1,
      ease: 'power1.in'
    });
  }

  return (
    siteLink ? (
      <a className={ `${ styles.card } ${ className }` }
         id={cardID}
         href={ siteLink }
         rel={ 'noreferrer noopener' }
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
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
           onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}>
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
