import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image';
import { TrashIcon } from '../../../assets/icons/TrashIcon'

export const Table = ({values}) => {

  const rows = values.map((value, i) =>  {
    return (
      <tr key={i}>
        <td>{value.description}</td>
        <td>{value.bankName}</td>
        <td>{value.age}</td>
        <td>
          <Image src={value.url} alt={`logo de ${value.bankName}`} width={40} height={35} />
        </td>
        <td>
          <button type="button">
            <TrashIcon />
          </button>
        </td>
      </tr>
    )
  })

  return (
    <table>
      <thead>
        <tr key="">
          <th>Nombre del banco</th>
          <th>Descripción</th>
          <th>Edad</th>
          <th>Logo</th>
          <th>
            <button type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          rows
        }
      </tbody>
    </table>
  )
}

Table.propTypes = {}
