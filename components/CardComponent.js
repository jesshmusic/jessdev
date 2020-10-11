import styles from "./Card.module.scss";
import ReactMarkdown from "react-markdown";

const CardComponent = ( { title, description, image, subtitle, siteLink }) => (
  siteLink ? (
    <a className={styles.card} href={siteLink} rel={'noreferrer noopener'} target={'_blank'}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {subtitle ? <h4 className={styles.subtitle}>{subtitle}</h4> : null}
      </div>
      <div className={ styles.image } style={ { backgroundImage: `url("${ image.url }")` } }/>
      <div className={styles.content}>
        <ReactMarkdown source={description} />
      </div>
    </a>
  ) : (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {subtitle ? <h4 className={styles.subtitle}>{subtitle}</h4> : null}
      </div>
      <div className={ styles.image } style={ { backgroundImage: `url("${ image.url }")` } }/>
      <div className={styles.content}>
        <ReactMarkdown source={description} />
      </div>
    </div>
  )

);

export default CardComponent;
