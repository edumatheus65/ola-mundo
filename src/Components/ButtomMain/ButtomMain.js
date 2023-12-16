import React from 'react'
import styles from './ButtomMain.module.css'

const ButtomMain = ({ children, size }) => {
    
    return (
        <button className={`
        ${styles.buttom_main}
        ${styles[size]}
        `}>
            {children}
        </button>
    )
}

export default ButtomMain
