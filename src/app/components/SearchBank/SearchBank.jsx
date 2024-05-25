import PropTypes from 'prop-types'
import InputSearch from './InputSearch'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/Button'
import useBankStore from '@/store/useBankStore';
import style from '@ui/Bank.module.css';

const SearchBank = () => {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            search: ''
        }
    });

    const filterBank = useBankStore((state) => state.filterBank);

    const onSearchBank = ({ search }) => {
        filterBank(search)
    }

    return (
        <form onSubmit={handleSubmit(onSearchBank)} className={style.searchBank}>
            <InputSearch control={control} />
            <Button label='Buscar' type='submit' />
        </form>
    )
}

export default SearchBank;