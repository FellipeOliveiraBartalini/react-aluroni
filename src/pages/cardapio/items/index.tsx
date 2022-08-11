import React from 'react';
import style from './Items.module.scss';
import cardapio from './items.json';
import Item from './item';

function Items() {
    return (
        <div className={style.itens}>
            {cardapio.map(item => (
                <Item key={item.id} {...item}/>
            ))}
        </div>
    )
}

export default Items;

