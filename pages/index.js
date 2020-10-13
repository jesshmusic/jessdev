import Head from 'next/head'
import { useEffect } from "react";
import Layout from '../components/layout'
import styles from '../styles/utils.module.scss'
import { getHomeData } from "../lib/posts";
import ReactMarkdown from "react-markdown";
import ContactForm from "../components/Contact";
import ClientTease from "../components/ClientTease";
import TechTease from "../components/TechTease";
import { distributeCards, distributeCardsOnScroll } from "../lib/animations";
import ProjectTease from "../components/ProjectTease";

export default function Home({ homeData }) {
  const siteTitle = homeData.Title;

  useEffect(() => {
    distributeCards(".client-card");
    distributeCardsOnScroll(".tech-card", '#clientSection');
  })

  return (
    <Layout home title={siteTitle}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.section}>
        <ReactMarkdown source={homeData.description} className={styles.text} />
      </section>
      {homeData.dev_projects && homeData.dev_projects.length > 0 ? (
        <section className={styles.section} id={'projectSection'}>
          <h2>Projects</h2>
          <div className={styles.cardGrid}>
            {homeData.dev_projects.map((props) => (
              <ProjectTease {...props} key={props.id} scrollTrigger={'#projectSection'} />
            ))}
          </div>
        </section>
      ) : null}
      {homeData.Client && homeData.Client.length > 0 ? (
        <section className={styles.section} id={'clientSection'}>
          <h2>Clients</h2>
          <div className={styles.cardGrid}>
            {homeData.Client.map((props) => (
              <ClientTease { ...props } key={props.id} scrollTrigger={'#clientSection'} />
            ))}
          </div>
        </section>
      ) : null}
      {homeData.Technology && homeData.Technology.length > 0 ? (
        <section className={styles.section} id={'techSection'}>
          <h2>Technology</h2>
          <div className={styles.cardGrid}>
            {homeData.Technology.map((props) => (
              <TechTease {...props} key={props.id} scrollTrigger={'#techSection'} />
            ))}
          </div>
        </section>
      ) : null}
      <ContactForm />
    </Layout>
  )
}

export async function getStaticProps() {
  const homeData = await getHomeData()
  return {
    props: {
      homeData: homeData,
    }
  }
}
