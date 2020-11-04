import { PropTypes } from 'prop-types'
import DateComponent from './DateComponent'
import styles from './WorkTease.module.scss'

export const WorkTease = (props) => (
  <div className={styles.workTease}>
    <h3>{ props.jobTitle } <small>{props.employer}</small></h3>
    <h4><DateComponent dateString={props.startDate}/> - {props.isCurrentPosition ? 'now' : <DateComponent dateString={props.workEndDate} /> } </h4>
    {props.workBullet && props.workBullet.length > 0 ? (
      <ul>
        {props.workBullet.map((workBullet) => (
          <li key={`workBullet${workBullet.id}`}>{workBullet.bullet}</li>
        ))}
      </ul>
    ) : null}
  </div>
)

WorkTease.propTypes = {
  employer: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  isCurrentPosition: PropTypes.bool,
  workEndDate: PropTypes.string,
  workBullet: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      bullet: PropTypes.string.isRequired
    })
  )
}
