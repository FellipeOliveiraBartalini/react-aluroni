import React from 'react';
import style from './Cardapio.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg'

function Cardapio() {
    return (
        <main>
            <nav className={style.menu}>
                <Logo />
            </nav>
        </main>
    )
}

export default Cardapio;
