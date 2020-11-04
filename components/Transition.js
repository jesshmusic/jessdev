import {
  TransitionGroup,
  Transition as ReactTransition
} from 'react-transition-group'
import { PropTypes } from 'prop-types'

const TIMEOUT = 500
const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 0
  }
}

const Transition = ({ children, location }) => {
  return (
    <TransitionGroup style={{ position: 'relative' }}>
      <ReactTransition
        key={location}
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT
        }}
      >
        {status => (
          <div style={{ ...getTransitionStyles[status] }}>
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  )
}
Transition.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired
}
export default Transition
