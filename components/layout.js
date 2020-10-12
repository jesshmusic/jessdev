import Head from 'next/head';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { useEffect } from "react";
import Logo from "./Logo";

gsap.registerPlugin(SplitText);

export default function Layout({ children, home, title }) {
  useEffect(() => {
    const splitText = new SplitText('#siteHeadingText', {type:'chars'});
    const headingTimeline = gsap.timeline();
    gsap.set('#siteHeadingText', {perspective: 400})

    headingTimeline.from(splitText.chars, {
      duration: 1,
      x: '-400px',
      autoAlpha: 0,
      transformOrigin: '100% 50%',
      ease: 'back.out',
      stagger: 0.1
    })
  });

  const onHover = () => {
    const splitText = new SplitText('#siteHeadingText', {type:'chars'});
    const headingTimeline = gsap.timeline();
    gsap.set('#siteHeadingText', {perspective: 400})
    headingTimeline.from(splitText.chars, {
      duration: 2,
      autoAlpha: 0,
      x: 'random(-100, 100, 5)',
      y: 'random(-100, 100, 5)',
      transformOrigin: '100% 50%',
      ease: 'power1.out',
      stagger: 0.01
    })
  }

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
              onMouseEnter={onHover}
              id={'siteHeadingText'}>
            {title}
          </h1>
        ) : (
          <h1 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}
                 onMouseEnter={onHover}
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
