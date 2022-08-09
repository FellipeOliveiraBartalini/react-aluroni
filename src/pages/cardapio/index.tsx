import React from 'react';
import style from './Cardapio.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg'
import Buscador from './buscador';
import { useState } from 'react';

function Cardapio() {
    const [busca, setBusca] = useState("");

    return (
        <main>
            <nav className={style.menu}>
                <Logo />
            </nav>

            <header className={style.header}>
                <h2 className={style.header__text}>A casa do código e da massa</h2>
            </header>

            <section className={style.cardapio}>
                <h3 className={style.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca} />
            </section>
        </main>
    )
}

export default Cardapio;
