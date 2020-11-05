import styles from './Page.module.scss'
import ReactMarkdown from 'react-markdown'
import TechTease from './TechTease'
import { Carousel } from 'react-responsive-carousel'
import { PropTypes } from 'prop-types'
import { SkillTease } from './SkillTease'
import { WorkTease } from './WorkTease'
import { useEffect } from 'react'
import { headingsAnimateIn } from '../lib/animations'
import { EducationTease } from './EducationTease'

const Page = (props) => {
  useEffect(() => {
    headingsAnimateIn()
  })

  return (
    <div>
      <h1 className={ `${styles.pageTitle} page-title` }>{ props.title }</h1>
      <article className={ styles.mainContent }>
        <div className={ styles.content }>
          <ReactMarkdown source={ props.content }/>
        </div>
        { props.thumbnail && !props.isResumePage ? (
          <div className={ styles.thumbnail }>
            <img src={ props.thumbnail.url } alt={ props.thumbnail.alt }/>
          </div>
        ) : null }
      </article>
      { props.tech && props.tech.length > 0 ? (
        <section id={ 'techSection' }>
          <h3 className={ `${styles.heading} page-heading` }>Technology</h3>
          <div className={ styles.cardGrid }>
            { props.tech.map((tech) => {
              return <TechTease
                logo={ tech.icon }
                title={ tech.title }
                description={ tech.description }
                key={ tech.id }
                scrollTrigger={ '#techSection' }/>
            }) }
          </div>
        </section>
      ) : null }
      { props.buttonText && props.link ? (
        <div className={ styles.linkRow }>
          <a href={ props.link }
            className={ styles.githubLink }
            rel={ 'noreferrer noopener' }
            target={ '_blank' }>
            { props.buttonText }
          </a>
        </div>) : null }
      { props.gallery && props.gallery.length > 0 ? (
        <section id={ 'gallerySection' }>
          <h3 className={ `${styles.heading} page-heading` }>Screenshots</h3>
          <div className={ styles.gallery }>
            <Carousel autoPlay={ true }>
              { props.gallery.map(image => (
                <div key={ image.id }>
                  <img src={ image.formats ? image.formats.large.url : image.url } alt={ image.alt }/>
                </div>
              )) }
            </Carousel>
          </div>
        </section>
      ) : null }
      { props.work && props.work.length > 0 ? (
        <section id={ 'workSection' }>
          <h3 className={ `${styles.heading} page-heading` }>Experience</h3>
          <div className={ styles.contentRow }>
            { props.work.map((work) => {
              return <WorkTease { ...work } key={ `work${work.id}` }/>
            }) }
          </div>
        </section>
      ) : null }
      { props.skills && props.skills.length > 0 ? (
        <section id={ 'workSection' }>
          <h3 className={ `${styles.heading} page-heading` }>Skills</h3>
          <div className={ styles.contentRow }>
            { props.skills.map((skill) => {
              return <SkillTease { ...skill } key={ `skills${skill.id}` }/>
            }) }
          </div>
        </section>
      ) : null }
      { props.education && props.education.length > 0 ? (
        <section id={ 'workSection' }>
          <h3 className={ `${styles.heading} page-heading` }>Education</h3>
          <div className={ styles.contentRow }>
            { props.education.map((degree) => {
              return <EducationTease { ...degree } key={ `education${degree.id}` }/>
            }) }
          </div>
        </section>
      ) : null }
    </div>
  )
}

Page.propTypes = {
  buttonText: PropTypes.string,
  thumbnail: PropTypes.object,
  content: PropTypes.string.isRequired,
  gallery: PropTypes.array,
  isResumePage: PropTypes.bool,
  link: PropTypes.string,
  tech: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      icon: PropTypes.object,
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),
  skills: PropTypes.array,
  title: PropTypes.string.isRequired,
  work: PropTypes.array,
  education: PropTypes.array
}

export default Page
