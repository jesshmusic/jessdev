import { parseISO, format } from 'date-fns'
import { PropTypes } from 'prop-types'

export default function DateComponent ({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

DateComponent.propTypes = {
  dateString: PropTypes.string.isRequired
}
