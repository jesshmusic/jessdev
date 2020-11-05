import Link from 'next/link'
import { PropTypes } from 'prop-types'
import styles from './Navigation.module.scss'

const Navigation = ({ toggleNav }) => {
  return (
    <div className={styles.navigationOverlay} id={'navigationOverlay'} onClick={toggleNav}>
      <nav role="navigation">
        <ul>
          <li><Link href="/"><a data-content="Projects, Clients, Tech">Home</a></Link></li>
          <li><Link href="/about"><a data-content="Who am I?">About</a></Link></li>
          <li><Link href="/resume"><a data-content="What is my experience?">Resumé</a></Link></li>
        </ul>
      </nav>
    </div>
  )
}

Navigation.propTypes = {
  toggleNav: PropTypes.func.isRequired
}

export default Navigation
