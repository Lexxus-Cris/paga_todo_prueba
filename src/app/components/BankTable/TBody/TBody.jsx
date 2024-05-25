import PropTypes from 'prop-types'
import Image from 'next/image'
import { TrashIcon } from '../../TrashIcon';
import styles from '@ui/Bank.module.css'

const TBody = ({ banks, removeBank }) => {

    const rows = banks.map((value, i) => {
        return (
            <tr key={i} className={styles.bodyRow}>
                <td>{value.bankName}</td>
                <td>{value.description}</td>
                <td>{value.age}</td>
                <td>
                    <Image src={value.url} alt={`logo de ${value.bankName}`} width={40} height={35} />
                </td>
                <td>
                    <button className={styles.trashButton} type="button" onClick={() => removeBank(value.bankName)}>
                        <TrashIcon />
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <tbody>
            {rows}
        </tbody>
    )
}

TBody.propTypes = {}

export default TBody