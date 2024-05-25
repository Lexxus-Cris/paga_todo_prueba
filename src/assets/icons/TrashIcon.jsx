import Image from 'next/image'
import trash from './trash-can-outline.svg'

export const TrashIcon = ({width = 30, height = 30, className }) => {
  return (
    <Image className={className} src={trash} alt="Icono de borrado" width={width} height={height} />
  )
}
