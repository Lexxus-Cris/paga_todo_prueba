import PropTypes from 'prop-types'

const Column = ({className, children})  => {
  return (
    <th className={className}>{children}</th>
  )
}

Column.propTypes = {
  header: PropTypes.string.isRequired,
}

export default Column;