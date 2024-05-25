"use client"
import TBody from './TBody/TBody';
import THeader from './THeader/THeader';
import useBankStore from '@/store/useBankStore';

const BankTable = () => {

  const banks = useBankStore((state) => state.banks);
  const removeBank = useBankStore((state) => state.removeBank);

  return (
    <table>
      {
        banks === undefined || banks.length === 0
        ? <span>Sin datos por mostrar</span>
        : <>
          <THeader />
          <TBody banks={banks} removeBank={removeBank} />
        </>
      }
    </table>
  )
}

export default BankTable;