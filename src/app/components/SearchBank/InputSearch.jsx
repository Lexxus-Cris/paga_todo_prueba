import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import styles from '../../ui/Bank.module.css'

const InputSearch = ({ control }) => {
    return (
        <Controller
            name='search'
            control={control}
            render={({field}) => (
                <input className={styles.inputSearch} name={field.name} value={field.value} type="text" placeholder='Ingresa un banco...' onChange={field.onChange} />
            )}
        />
    )
}

InputSearch.propTypes = {
    control: PropTypes.any.isRequired
}

export default InputSearch