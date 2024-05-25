import Column from './Column/Column';
import styles from '@ui/Bank.module.css';

const THeader = () => {
    return(
        <thead>
            <tr className={styles.headRow}>
                <Column>Nombre del banco</Column>
                <Column>Descripción</Column>
                <Column>Edad</Column>
                <Column>Logo</Column>
                <Column>
                </Column>
            </tr>
        </thead>
    )
}

export default THeader