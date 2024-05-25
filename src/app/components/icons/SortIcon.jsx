import Image from 'next/image';
import PropTypes from 'prop-types'

export const SortIcon = ({ width = 25, height= 25, img }) => {
    return (
        <Image src={img} alt='icono de ordenamiento' width={width} height={height} />
    )
}

SortIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    img: PropTypes.any,
}