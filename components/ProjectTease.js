import CardComponent from './CardComponent'
import { PropTypes } from 'prop-types'

const ProjectTease = ({ title, excerpt, thumbnail, slug }) => {
  return (
    <CardComponent title={ title }
      isInternalLink
      description={excerpt}
      image={ thumbnail }
      siteLink={ `/dev-projects/${slug}` }
      className={ 'project-card' }/>
  )
}
ProjectTease.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  thumbnail: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
}

export default ProjectTease
