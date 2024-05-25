import { SortIcon } from '../../icons/SortIcon';
import Column from './Column';
import styles from '@ui/Bank.module.css';
import sortImg from '@public/sort.svg';
import sortImgAsc from '@public/sort-ascending.svg';
import sortImgDesc from '@public/sort-descending.svg';
import { useState } from 'react';
import useBankStore from '@/store/useBankStore';


const THeader = () => {

    const [sortActive, setSortActive] = useState({
        status: 1,
        img: sortImg
    })

    const sortAscend = useBankStore((state) => state.sortBankAsc);
    const sortDescend = useBankStore((state) => state.sortBankDesc);
    const resetOrder = useBankStore((state) => state.resetOrder);

    const onClickSort = () => {
        if (sortActive.status === 1) {
            setSortActive({
                status: 2,
                img: sortImgAsc
            });
            sortAscend();
        } else if (sortActive.status === 2) {
            setSortActive({
                status: 3,
                img: sortImgDesc
            });
            sortDescend();
        } else {
            setSortActive({
                status: 1,
                img: sortImg
            });
            resetOrder();
        }
    }

    return(
        <thead>
            <tr className={styles.headRow}>
                <Column>
                    <button type="button" className='flex gap-2 items-center'onClick={onClickSort} >
                        Nombre del banco
                        <SortIcon img={sortActive.img}/>
                    </button>
                </Column>
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