import { getResumeData } from '../lib/posts'
import { PropTypes } from 'prop-types'
import Page from '../components/Page'
import { education } from '../lib/static-data'

export default function Resume ({ postData }) {
  const thumbnail = {
    url: './images/LogoSmall.svg',
    alt: 'Logo'
  }

  return (
    <Page content={postData.summary}
          isResumePage
          title={postData.title}
          thumbnail={thumbnail}
          skills={postData.tech}
          work={postData.work}
          education={education}/>
  )
}
Resume.propTypes = {
  postData: PropTypes.object
}

export async function getStaticProps () {
  const postData = await getResumeData()
  return {
    props: {
      postData
    }
  }
}
