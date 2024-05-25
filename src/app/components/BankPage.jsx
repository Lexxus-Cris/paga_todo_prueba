'use client'
import { useGetBanks } from '@/hooks/useGetBanks'
import BankTable from './BankTable/BankTable';
import SearchBank from './SearchBank/SearchBank';
import { Button } from '@/components/Button';
import { useEffect, useState } from 'react';

const BankPage = ({}) => {

    // Se agrega validación para corregir inconsistencia entre el renderizado del lado del servidor y del lado del cliente
    const [isClient, setIsClient] = useState(false)
    // Uso de useEffect para permitir que el código que implementa localStorage solo se ejecute en el lado del cliente
    useEffect(() => {
        setIsClient(true)
    }, [])

    const { fetchAndStoreBanks } = useGetBanks();

    return (
        <section>
            <Button label='Cargar bancos' onClick={fetchAndStoreBanks} />
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