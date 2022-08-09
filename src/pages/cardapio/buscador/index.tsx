import React from 'react';
import { CgSearch } from 'react-icons/cg'
import style from './Buscador.module.scss';

interface Props {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

function Buscador({ busca, setBusca }: Props) {
    return (
        <div className={style.buscador}>
            <input type="text" value={busca} onChange={(event) => {setBusca(event.target.value)}} />
            <CgSearch
                size={20}
                color="#4c4d5e"
            />            
        </div>
    )
}

export default Buscador
