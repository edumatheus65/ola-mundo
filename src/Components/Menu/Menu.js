import React from 'react'
import styles from './Menu.module.css'
import MenuLink from '../MenuLink/MenuLink'

const Menu = () => {

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/about">
                    Sobre Mim
                </MenuLink>
                
            </nav>
        </header>
    )
}

export default Menu
