import Head from 'next/head';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';

export default function Layout({ children, home, title }) {
  return (
    <div className={styles.content} style={{backgroundImage: 'url("/images/logo.svg")'}}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`/images/logo.svg`}
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <h1 className={utilStyles.heading2Xl}>{title}</h1>
        ) : (
          <h1 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{title}</a>
            </Link>
          </h1>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
