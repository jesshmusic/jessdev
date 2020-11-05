import styles from './Header.module.scss'
import Link from 'next/link'
import Logo from './Logo'
import { PropTypes } from 'prop-types'
import { useEffect } from 'react'
import { animateBackground } from '../lib/animations'

const Header = ({ home, toggleNav }) => {
  useEffect(() => {
    animateBackground()
  })

  return (
    <header className={ styles.header } style={ { backgroundImage: 'url(\'./images/LogoSmall.svg\')' } }>
      <button className={`open-overlay ${styles.openOverlay}`} onClick={toggleNav}>
        <span className="bar-top"/>
        <span className="bar-middle"/>
        <span className="bar-bottom"/>
      </button>
      { home ? (
        <h1 id={ 'siteHeadingText' }>
          Jess Hendricks <small>Front End and Full Stack Developer</small>
        </h1>
      ) : (
        <Link href="/">
          <a id={ 'siteHeadingText' }>
            Jess Hendricks <small>Front End and Full Stack Developer</small>
          </a>
        </Link>
      ) }
      <Logo/>
    </header>
  )
}

Header.propTypes = {
  home: PropTypes.bool,
  toggleNav: PropTypes.func.isRequired
}

export default Header
