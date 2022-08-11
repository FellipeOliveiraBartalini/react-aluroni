import React, { useEffect, useState } from 'react';
import style from './Items.module.scss';
import cardapio from './items.json';
import Item from './item';

interface Props {
    busca: string,
    filtro: number| null,
    ordenador: string
}

function Items(filtros: Props) {
    const [lista, setLista] = useState(cardapio);
    const { busca, filtro } = filtros;

    function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i');
        return regex.test(title);
    }

    function testaFiltro(id: number) {
        if (filtro !== null) return filtro === id;
        return true;
    }

    useEffect(() => {
        const novaLista = cardapio.filter( item => testaBusca(item.title) && testaFiltro(item.category.id));
        setLista(novaLista)

    }, [busca, filtro ]);

    return (
        <div className={style.itens}>
            {lista.map(item => (
                <Item key={item.id} {...item}/>
            ))}
        </div>
    )
}

export default Items;

