import PropTypes from 'prop-types'

export const Column = ({header})  => {
  return (
    <th>{header}</th>
  )
}

Column.propTypes = {
  header: PropTypes.string.isRequired,
}
