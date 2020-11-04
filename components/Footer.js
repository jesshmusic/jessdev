import styles from './footer.module.scss'

const Footer = () => (
  <div className={styles.footer} id={'pageFooter'}>
    <div className={styles.column}>
      <h3>Jess Hendricks <small>Front End and Full Stack Developer</small></h3>
      <address>
        Easthampton, MA <br />
        <a href={'https://existentialmusic.com/'} target={'_blank'} rel={'noreferrer'}>ExistentialMusic.com</a> <br />
        <a href={'tel:(413) 367-6215'}>(413) 367-6215</a>
      </address>
    </div>
    <div className={styles.column}>
      <h4>Links</h4>
      <a href='https://www.linkedin.com/in/jesshendricks'
        className={styles.socialLink}
        target={'_blank'}
        rel={'noreferrer'}
        title={'LinkedIn'}>
        <i aria-hidden className="fab fa-linkedin"/> LinkedIn Profile
      </a>
      <a href='https://existentialmusic.com/'
        className={styles.socialLink}
        target={'_blank'}
        rel={'noreferrer'}
        title={'Personal Blog'}>
        <i aria-hidden className="fas fa-rss"/> Personal Blog
      </a>
      <a href='https://jesshendricks.com/'
        className={styles.socialLink}
        target={'_blank'}
        rel={'noreferrer'}
        title={'Film Music Portfolio'}>
        <i aria-hidden className="fas fa-icons"/> Film Music Portfolio
      </a>
    </div>
  </div>
)

export default Footer
