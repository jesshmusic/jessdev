import { PropTypes } from 'prop-types'
import styles from './SkillTease.module.scss';

export const SkillTease = (props) => (
  <div className={styles.skillTease}>
    <img src={props.logo.url} />
    <h3>{ props.title } <small>{props.yearsOfExperience}</small></h3>
  </div>
)

SkillTease.propTypes = {
  logo: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
  yearsOfExperience: PropTypes.string.isRequired
}
