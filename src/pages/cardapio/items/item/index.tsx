import React from 'react';
import style from './Item.module.scss';
import cardapio from '../items.json';
import classNames from 'classnames';

type Props = typeof cardapio[0];

export default function Item(item: Props) {
    return (
        <div className={style.item}>
            <div className={style.item__imagem}>
                <img src={item.photo} alt={"Foto do "+ item.title} />
            </div>

            <div className={style.item__descricao}>
                <div className={style.item__titulo}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
                <div className={style.item__tags}>
                    <div className={classNames({
                        [style.item__tipo]: true,
                        [style[`item__tipo__${item.category.label.toLowerCase()}`]]: true
                    })}>
                        {item.category.label}
                    </div>
                    <div className={style.item__porcao}>
                        {item.size}g
                    </div>
                    <div className={style.item__qtdpessoas}>
                        {item.serving} pessoa{item.serving === 1 ? '' : 's'}
                    </div>
                    <div className={style.item__valor}>
                        R$ {item.price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}
