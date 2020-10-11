import styles from "./Card.module.scss";
import ReactMarkdown from "react-markdown";
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);


const CardComponent = ( { title, description, image, subtitle, siteLink, className }) => (
  siteLink ? (
    <a className={ `${styles.card} ${className}` } href={ siteLink } rel={ 'noreferrer noopener' } target={ '_blank' }>
      <div className={ styles.header }>
        <h3 className={ styles.title }>{ title }</h3>
        { subtitle ? <h4 className={ styles.subtitle }>{ subtitle }</h4> : null }
      </div>
      <div className={ styles.image } style={ { backgroundImage: `url("${ image.url }")` } }/>
      <div className={ styles.content }>
        <ReactMarkdown source={ description }/>
      </div>
    </a>
  ) : (
    <div className={ `${styles.card} ${className}` }>
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

export default CardComponent;
