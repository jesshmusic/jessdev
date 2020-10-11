import Head from 'next/head';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';

export default function Layout({ children, home, title }) {
  return (
    <div className={styles.content}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        {/*<meta*/}
        {/*  property="og:image"*/}
        {/*  content={`https://og-image.now.sh/${encodeURI(*/}
        {/*    siteTitle*/}
        {/*  )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}*/}
        {/*/>*/}
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
