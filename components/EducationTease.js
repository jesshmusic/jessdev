import { PropTypes } from 'prop-types'
import DateComponent from './DateComponent'
import styles from './EducationTease.module.scss'

export const EducationTease = (props) => (
  <div className={styles.workTease}>
    <h3>{ props.degree } <small>{props.school}</small></h3>
    <h4><DateComponent dateString={props.year} noMonth /></h4>
    {props.schoolBullets && props.schoolBullets.length > 0 ? (
      <ul>
        {props.schoolBullets.map((schoolBullet) => (
          <li key={`workBullet${schoolBullet.id}`}>{schoolBullet.bullet}</li>
        ))}
      </ul>
    ) : null}
  </div>
)

EducationTease.propTypes = {
  school: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  schoolBullets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      bullet: PropTypes.string.isRequired
    })
  )
}
