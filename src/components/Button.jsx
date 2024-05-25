import styles from './Components.module.css'

export const  Button = ({ onClick, label, type='button' }) => {

    return (
        <button className={styles.button} type={type} onClick={onClick}>{label}</button>
    )
}