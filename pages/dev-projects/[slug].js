import Layout from '../../components/layout'
import { getAllProjectSlugs, getProjectData } from '../../lib/posts'
import ReactMarkdown from 'react-markdown'
import styles from './project.module.scss'
import { Carousel } from 'react-responsive-carousel'
import { PropTypes } from 'prop-types'
import TechTease from '../../components/TechTease'

export default function Post ({ postData }) {
  const buttonText = postData.link && postData.link.includes('github') ? 'View on Github' : 'View App';

  return (
    <Layout>
      <h2 className={styles.pageTitle}>{ postData.title }</h2>
      <article className={styles.mainContent}>
        <div className={styles.content}>
          <ReactMarkdown source={postData.content} />
        </div>
        <div className={styles.thumbnail}>
          <img src={postData.thumbnail.url} alt={postData.thumbnail.alt}/>
        </div>
      </article>
      {postData.tech && postData.tech.length > 0 ? (
        <section className={styles.contentRow} id={'techSection'}>
          <h3 className={styles.heading}>Technology</h3>
          <div className={styles.cardGrid}>
            {postData.tech.map((tech) => {
              return <TechTease
                logo={ tech.icon }
                title={ tech.title }
                description={ tech.description }
                key={ tech.id }
                scrollTrigger={ '#techSection' }/>
            })}
          </div>
        </section>
      ) : null}
      <div className={styles.linkRow}>
        <a href={postData.link}
          className={styles.githubLink}
          rel={'noreferrer noopener'}
          target={'_blank'}>
          {buttonText}
        </a>
      </div>
      {postData.gallery && postData.gallery.length > 0 ? (
        <div className={styles.gallery}>
          <h3 className={styles.heading}>Screenshots</h3>
          <Carousel autoPlay={true} width={'50vh'}>
            {postData.gallery.map(image => (
              <div key={image.id}>
                <img src={image.formats ? image.formats.large.url : image.url} alt={image.alt}/>
              </div>
            ))}
          </Carousel>
        </div>
      ) : null}
    </Layout>
  )
}
Post.propTypes = {
  postData: PropTypes.shape({
    thumbnail: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    gallery: PropTypes.array,
    link: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        icon: PropTypes.object,
        title: PropTypes.string,
        description: PropTypes.string
      })
    ),
    title: PropTypes.string.isRequired
  })
}

export async function getStaticPaths () {
  const paths = await getAllProjectSlugs()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const postData = await getProjectData(params.slug)
  return {
    props: {
      postData
    }
  }
}
