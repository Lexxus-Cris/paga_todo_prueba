import styles from './Components.module.css'

export const  Button = ({ onClick, label, type='button', className }) => {

    return (
        <button className={styles.button} type={type} onClick={onClick}>{label}</button>
    )
}