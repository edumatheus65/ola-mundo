import React from 'react'
import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'


const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá Mundo
        </h1>

        <p className={styles.paragrafo}>
          Bem-vindo ao meu repositório "ola-mundo"! Aqui você encontrará uma coleção de postagens referente a técnologia em diversas linguagens de programaçãona área de desenvolvimento.
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />

        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt='Foto Edu'
        />
      </div>

    </div>
  )
}

export default Banner
