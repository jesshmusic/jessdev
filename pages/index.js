import { useEffect } from 'react'
import Layout from '../components/layout'
import styles from '../styles/utils.module.scss'
import { getHomeData } from '../lib/posts'
import ReactMarkdown from 'react-markdown'
import ContactForm from '../components/Contact'
import ClientTease from '../components/ClientTease'
import TechTease from '../components/TechTease'
import { distributeCards, distributeCardsOnScroll } from '../lib/animations'
import ProjectTease from '../components/ProjectTease'
import { PropTypes } from 'prop-types'

export default function Home ({ homeData }) {
  useEffect(() => {
    distributeCards('.project-card')
    distributeCards('.client-card')
    distributeCardsOnScroll('.tech-card', '#clientSection')
  })

  return (
    <div>
      <section className={styles.section}>
        <ReactMarkdown source={homeData.description} className={styles.text} />
      </section>
      {homeData.dev_projects && homeData.dev_projects.length > 0 ? (
        <section className={styles.section} id={'projectSection'}>
          <div className={styles.headingContainer}>
            <h2>Projects</h2>
          </div>
          <div className={styles.cardGrid}>
            {homeData.dev_projects.map((props) => (
              // eslint-disable-next-line react/prop-types
              <ProjectTease {...props} key={props.slug} scrollTrigger={'#projectSection'} />
            ))}
          </div>
        </section>
      ) : null}
      {homeData.Client && homeData.Client.length > 0 ? (
        <section className={styles.section} id={'clientSection'}>
          <div className={styles.headingContainer}>
            <h2>Clients</h2>
          </div>
          <div className={styles.cardGrid}>
            {homeData.Client.map((props) => (
              // eslint-disable-next-line react/prop-types
              <ClientTease { ...props } key={props.id} scrollTrigger={'#clientSection'} />
            ))}
          </div>
        </section>
      ) : null}
      {homeData.Technology && homeData.Technology.length > 0 ? (
        <section className={styles.section} id={'techSection'}>
          <div className={styles.headingContainer}>
            <h2>Technology</h2>
          </div>
          <div className={styles.cardGrid}>
            {homeData.Technology.map((props) => (
              // eslint-disable-next-line react/prop-types
              <TechTease {...props} key={props.id} scrollTrigger={'#techSection'} />
            ))}
          </div>
        </section>
      ) : null}
      <section className={styles.section} id={'contactSection'}>
        <div className={styles.headingContainer}>
          <h2>Get in Touch</h2>
        </div>
        <ContactForm />
      </section>
    </div>
  )
}
Home.propTypes = {
  homeData: PropTypes.shape({
    Client: PropTypes.array,
    description: PropTypes.string.isRequired,
    dev_projects: PropTypes.array,
    Technology: PropTypes.array,
    Title: PropTypes.string.isRequired
  })
}

export async function getStaticProps () {
  const homeData = await getHomeData()
  return {
    props: {
      homeData: homeData
    }
  }
}
