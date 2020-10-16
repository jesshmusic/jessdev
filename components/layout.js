import Head from 'next/head'
import styles from './layout.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'
import Logo from './Logo'
import { titleAnimateIn } from '../lib/animations'
import { PropTypes } from 'prop-types'
import Footer from './Footer'

export default function Layout ({ children, home }) {
  useEffect(() => {
    titleAnimateIn('#siteHeadingText')
  })

  return (
    <div className={styles.content}>
      <Head>
        <title>Jess Hendricks | Software Engineer | Web Developer</title>
        <meta name="title" content="Jess Hendricks | Software Engineer | Web Developer" />
        <meta name="description" content=" With over 7 years of experience, I can create a custom web presence for almost any need using many of the latest technologies. "/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webdev.existentialmusic.com/" />
        <meta property="og:title" content="Jess Hendricks | Software Engineer | Web Developer" />
        <meta property="og:description" content=" With over 7 years of experience, I can create a custom web presence for almost any need using many of the latest technologies. " />
        <meta property="og:image" content="/images/FeatureImage.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://webdev.existentialmusic.com/" />
        <meta property="twitter:title" content="Jess Hendricks | Software Engineer | Web Developer" />
        <meta property="twitter:description" content=" With over 7 years of experience, I can create a custom web presence for almost any need using many of the latest technologies. " />
        <meta property="twitter:image" content="/images/FeatureImage.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <script src="https://kit.fontawesome.com/90b73f7468.js" crossOrigin="anonymous"></script>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <header className={styles.header}>
        {home ? (
          <h1 id={'siteHeadingText'}>
            Jess Hendricks <small>Software Engineer | Web Developer</small>
          </h1>
        ) : (
          <h1>
            <Link href="/">
              <a id={'siteHeadingText'}>
                Jess Hendricks <small>Software Engineer | Web Developer</small>
              </a>
            </Link>
          </h1>
        )}
        <Logo />
      </header>
      <main className={styles.mainContent}>
        {children}
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.array,
  home: PropTypes.bool
}
