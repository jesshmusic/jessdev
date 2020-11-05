import { parseISO, format } from 'date-fns'
import { PropTypes } from 'prop-types'

export default function DateComponent ({ dateString, noMonth }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, noMonth ? 'yyyy' : 'LLLL, yyyy')}</time>
}

DateComponent.propTypes = {
  dateString: PropTypes.string.isRequired,
  noMonth: PropTypes.bool
}
