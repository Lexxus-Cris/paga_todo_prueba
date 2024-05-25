import PropTypes from 'prop-types'

const Column = ({children})  => {
  return (
    <th className='t-header__bank'>{children}</th>
  )
}

Column.propTypes = {
  header: PropTypes.string.isRequired,
}

export default Column;