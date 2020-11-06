import CardComponent from './CardComponent'
import { PropTypes } from 'prop-types'

const ProjectTease = ({ title, subtitle, excerpt, thumbnail, slug }) => {
  return (
    <CardComponent title={ title }
                   isInternalLink
                   description={excerpt}
                   image={ thumbnail }
                   siteLink={ `/dev-projects/${slug}` }
                   cardType={'Project'}
                   subtitle={subtitle}
                   className={ 'project-card' }/>
  )
}
ProjectTease.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  thumbnail: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default ProjectTease
