import { getAllProjectSlugs, getProjectData } from '../../lib/posts'
import { PropTypes } from 'prop-types'
import Page from '../../components/Page'

export default function Post ({ postData }) {
  const buttonText = postData.link && postData.link.includes('github') ? 'View on Github' : 'View App';

  return <Page {...postData} buttonText={buttonText} />
}
Post.propTypes = {
  postData: PropTypes.object
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
