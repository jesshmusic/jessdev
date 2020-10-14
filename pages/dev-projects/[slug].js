import Layout from '../../components/layout'
import { getAllProjectSlugs, getProjectData } from '../../lib/posts'
import ReactMarkdown from 'react-markdown'
import styles from './project.module.scss'
import { Carousel } from 'react-responsive-carousel'
import { PropTypes } from 'prop-types'

export default function Post ({ postData }) {
  return (
    <Layout title={postData.title}>
      <h2 className={styles.pageTitle}>{ postData.title }</h2>
      <div className={styles.contentRow}>
        <div className={styles.content}>
          <ReactMarkdown source={postData.content} />
        </div>
        <div className={styles.thumbnail}>
          <img src={postData.thumbnail.url} alt={postData.thumbnail.alt}/>
        </div>
      </div>
      <div className={styles.linkRow}>
        <a href={postData.link}
          className={styles.githubLink}
          rel={'noreferrer noopener'}
          target={'_blank'}>
          View on Github
        </a>
      </div>
      {postData.gallery && postData.gallery.length > 0 ? (
        <div className={styles.gallery}>
          <h2>Screenshots</h2>
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
