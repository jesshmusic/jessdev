import { getAboutData } from '../lib/posts'
import { PropTypes } from 'prop-types'
import Page from '../components/Page'

export default function About ({ postData }) {
  return (
    <Page {...postData} />
  )
}
About.propTypes = {
  postData: PropTypes.object
}

export async function getStaticProps () {
  const postData = await getAboutData()
  return {
    props: {
      postData
    }
  }
}
