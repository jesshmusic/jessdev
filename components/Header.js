import styles from './Header.module.scss'
import Link from 'next/link'
import Logo from './Logo'
import { PropTypes } from 'prop-types'

const Header = ({ home }) => (
  <header className={styles.header} style={ { backgroundImage: 'url(\'images/LogoSmall.svg\')' } }>
    {home ? (
      <h1 id={'siteHeadingText'}>
        Jess Hendricks <small>Front End and Full Stack Developer</small>
      </h1>
    ) : (
      <h1>
        <Link href="/">
          <a id={'siteHeadingText'}>
            Jess Hendricks <small>Front End and Full Stack Developer</small>
          </a>
        </Link>
      </h1>
    )}
    <Logo />
  </header>
)

Header.propTypes = {
  home: PropTypes.bool
}

export default Header
