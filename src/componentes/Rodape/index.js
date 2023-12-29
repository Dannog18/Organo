//src/componentes/Rodape/index.js

import './Rodape.css'

import React from 'react'

import Facebook from "../../../src/assets/facebook.png"

import Twitter from "../../../src/assets/twitter.png"

import Instagram from "../../../src/assets/instagram.png"

import LogoRodape from "../../../src/assets/logo.png"

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="/organo/public/images/facebook.png" target="_blank">
                        <img src={Facebook} alt='' />
                    </a>
                </li>
                <li>
                    <a href="/organo/public/images/twitter.png" target="_blank">
                        <img src={Twitter} alt='' />
                    </a>
                </li>
                <li>
                    <a href="/organo/public/images/instagram.png" target="_blank">
                        <img src={Instagram} alt='' />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src={LogoRodape} alt='' />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)
}

export default Rodape