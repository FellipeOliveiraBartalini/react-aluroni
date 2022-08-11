import React from 'react';
import style from './Item.module.scss';

export default function Item() {
    return (
        <div className={style.item}>
            <div className={style.item__imagem}>
                <img src={item.photo} alt="imagem" />
            </div>

            <div className={style.item__descricao}>
                <div className={style.item__titulo}>
                    <h2>{Item.title}</h2>
                    <p>{item.description}</p>
                </div>
                <div className={style.item__tags}>
                    <div className={style.item__tipo}>
                        {item.tipo}
                    </div>
                    <div className={style.item__porcao}>
                        {item.size}
                    </div>
                    <div className={style.item__qtdpessoas}>
                        {item.serving}
                    </div>
                    <div className={style.item__valor}>
                        {item.price}
                    </div>
                </div>
            </div>
        </div>
    )
}
