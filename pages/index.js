import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/utils.module.scss'
import { getHomeData, getSortedPostsData } from "../lib/posts";
import ReactMarkdown from "react-markdown";
import ContactForm from "../components/Contact";
import ClientTease from "../components/ClientTease";
import TechTease from "../components/TechTease";

export default function Home({ homeData }) {
  const siteTitle = homeData.Title;
  return (
    <Layout home title={siteTitle}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.section}>
        <ReactMarkdown source={homeData.description} />
      </section>
      {homeData.Client && homeData.Client.length > 0 ? (
        <section className={styles.section}>
          <h2>Clients</h2>
          <div className={styles.cardGrid}>
            {homeData.Client.map((props) => (
              <ClientTease { ...props } key={props.id} />
            ))}
          </div>
        </section>
      ) : null}
      {homeData.Technology && homeData.Technology.length > 0 ? (
        <section className={styles.section}>
          <h2>Technology</h2>
          <div className={styles.cardGrid}>
            {homeData.Technology.map((props) => (
              <TechTease {...props} key={props.id} />
            ))}
          </div>
        </section>
      ) : null}
      <ContactForm />
    </Layout>
  )
}

export async function getStaticProps() {
  const homData = await getHomeData()
  return {
    props: {
      homeData: homData,
    }
  }
}
