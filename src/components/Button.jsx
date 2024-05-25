import styles from './Components.module.css'

export const  Button = ({ onClick, label }) => {

    return (
        <button className={styles.button} type="button" onClick={onClick}>{label}</button>
    )
}