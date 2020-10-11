import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getHomeData, getSortedPostsData } from "../lib/posts";
import ReactMarkdown from "react-markdown";
import ContactForm from "../components/Contact";

export default function Home({ homeData }) {
  const siteTitle = homeData.Title
  return (
    <Layout home title={siteTitle}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <ReactMarkdown source={homeData.description} />
      </section>
      {homeData.Technology && homeData.Technology.length > 0 ? (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Technology</h2>
          <ul className={utilStyles.list}>
            {homeData.Technology.map(({ id, title, description, logo }) => (
              <li className={utilStyles.listItem} key={id}>
                <img src={logo.url} alt={title} />
                <h3>{title}</h3>
                <div>
                  <ReactMarkdown source={description} />
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {homeData.Client && homeData.Client.length > 0 ? (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Clients</h2>
          <ul className={utilStyles.list}>
            {homeData.Client.map(({ id, name, subtitle, description, logo, Image_gallery }) => (
              <li className={utilStyles.listItem} key={id}>
                <img src={logo.url} alt={name} />
                <h3>{name} <small>{subtitle}</small></h3>
                <div>
                  <ReactMarkdown source={description} />
                </div>
              </li>
            ))}
          </ul>
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
