import PropTypes from 'prop-types'
import InputSearch from './InputSearch'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/Button'

const SearchBank = () => {

    const { control, onsubmit } = useForm({
        defaultValues: {
            search: ''
        }
    })

    return (
        <div>
            <InputSearch control={control} />
            <Button label='Buscar' />
        </div>
    )
}

SearchBank.propTypes = {}

export default SearchBank;