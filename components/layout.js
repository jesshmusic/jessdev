import Head from 'next/head';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import { useEffect } from "react";
import Logo from "./Logo";
import { titleAnimateIn } from "../lib/animations";

export default function Layout({ children, home, title }) {
  useEffect(() => {
    titleAnimateIn('#siteHeadingText');
  });

  return (
    <div className={styles.content}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
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
          <h1 className={utilStyles.heading2Xl}
              id={'siteHeadingText'}>
            {title}
          </h1>
        ) : (
          <h1 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}
                 id={'siteHeadingText'}>
                {title}
              </a>
            </Link>
          </h1>
        )}
        <Logo />
      </header>
      <main className={styles.mainContent}>{children}</main>
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
