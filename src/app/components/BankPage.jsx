'use client'
import { useEffect, useState } from 'react';
import { useGetBanks } from '@/hooks/useGetBanks';

import BankTable from './BankTable/BankTable';
import SearchBank from './SearchBank/SearchBank';
import { Button } from '@/components/Button';

import useBankStore from '@/store/useBankStore';

import style from '@ui/Bank.module.css';
import btnStyle from '../../components/Components.module.css';

const BankPage = ({}) => {

    // Se agrega validación para corregir inconsistencia entre el renderizado del lado del servidor y del lado del cliente
    const [isClient, setIsClient] = useState(false);

    const resetBank = useBankStore((state) => state.resetOrder);

    const handleGetBanks = async () => {
        const banksStored = JSON.parse(localStorage.getItem('banks'))
        const { state } = banksStored;
        if (state.banks.length === 0) {
            return fetchAndStoreBanks();
        }

        resetBank();
    }

    const { fetchAndStoreBanks } = useGetBanks();
    // Uso de useEffect para permitir que el código que implementa localStorage solo se ejecute en el lado del cliente
    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        resetBank();
    }, [])

    return (
        <section className={style.bankPage}>
            <div className={style.options}>
                <Button  label='Reiniciar tabla' onClick={fetchAndStoreBanks} />
                <Button label='Cargar bancos' onClick={handleGetBanks} />
            </div>
            <SearchBank />
            {
                // Condicional para mostrar el componente de BankTable cuando se haya renderizado del lado del cliente
                isClient && <BankTable />
            }
        </section>
    )
}

BankPage.propTypes = {}

export default BankPage