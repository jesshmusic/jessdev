import Head from 'next/head'
import styles from './layout.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'
import { titleAnimateIn } from '../lib/animations'
import Footer from './Footer'
import Transition from './Transition'
import Header from './Header'
import { useRouter } from 'next/router'
import { PropTypes } from 'prop-types'

export default function Layout ({ children, home }) {
  const router = useRouter()

  useEffect(() => {
    titleAnimateIn('#siteHeadingText')
  }, [])

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Jess Hendricks | Front End and Full Stack Developer</title>
        <meta name="title" content="Jess Hendricks | Front End and Full Stack Developer" />
        <meta name="description" content=" With over 7 years of experience, I can create a custom web presence for almost any need using many of the latest technologies. "/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webdev.existentialmusic.com/" />
        <meta property="og:title" content="Jess Hendricks | Front End and Full Stack Developer" />
        <meta property="og:description" content=" With over 7 years of experience, I can create a custom web presence for almost any need using many of the latest technologies. " />
        <meta property="og:image" content="/images/FeatureImage.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://webdev.existentialmusic.com/" />
        <meta property="twitter:title" content="Jess Hendricks | Front End and Full Stack Developer" />
        <meta property="twitter:description" content=" With over 7 years of experience, I can create a custom web presence for almost any need using many of the latest technologies. " />
        <meta property="twitter:image" content="/images/FeatureImage.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <script src="https://kit.fontawesome.com/90b73f7468.js" crossOrigin="anonymous"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <Header home={home} />
      <div className="overlay-navigation">
        <nav role="navigation">
          <ul>
            <li><Link href="/"><a data-content="Projects, Clients, Tech">Home</a></Link></li>
            <li><Link href="/about"><a data-content="Who am I?">About</a></Link></li>
            <li><Link href="/resume"><a data-content="The brass tacks">Resumé</a></Link></li>
          </ul>
        </nav>
      </div>
      <Transition location={router.pathname}>
        <main className={styles.mainContent}>
          <div className={styles.container}>
            {children}
            {!home && (
              <div className={styles.backToHome}>
                <Link href="/">
                  <a>← Back to home</a>
                </Link>
              </div>
            )}
          </div>
        </main>
      </Transition>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.array,
  home: PropTypes.bool
}
