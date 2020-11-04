import Link from 'next/link'
import styles from './Navigation.module.scss'

const Navigation = () => {
  return <div className={styles.navigationOverlay} id={'navigationOverlay'}>
    <nav role="navigation">
      <ul>
        <li><Link href="/"><a data-content="Projects, Clients, Tech">Home</a></Link></li>
        <li><Link href="/about"><a data-content="Who am I?">About</a></Link></li>
        <li><Link href="/resume"><a data-content="The brass tacks">Resumé</a></Link></li>
      </ul>
    </nav>
  </div>
}

export default Navigation;
