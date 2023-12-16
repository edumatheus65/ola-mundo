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
        Bem-vindo ao meu repositório "MeuPortifolio"! Aqui você encontrará uma coleção dos meus projetos profissionais que representam minha jornada e habilidades na área de desenvolvimento.
          {/* e espero que você encontre inspiração e conhecimento ao explorar este universo digital que construí com tanto carinho. Sinta-se à vontade para explorar e entrar em contato, será um prazer compartilhar ideias e experiências com você! :) */}
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
