import React from 'react'
import styles from './Footer.module.css'
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

const Footer = () => {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />

            Desenvolido por Eduardo Matheus
        </footer>
    )
}

export default Footer
