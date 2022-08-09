import React from 'react';
import style from './Filtros.module.scss';
import filtros from './filtros.json';

type IOpcao = typeof filtros[0];

interface Opcao {
    id: number,
    label: string
}

function Filtros() {
    function selecionarFiltro(opcao: IOpcao) {

    }

    return (
        <div className={style.filtros}>
            {filtros.map((opcao) => {
                return (
                    <button className={style.filtros__filtro} key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
                        {opcao.label}
                    </button>
                )
            })}
        </div>
    )
}

export default Filtros;
