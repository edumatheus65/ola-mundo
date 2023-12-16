import React from 'react'
import styles from './NotFound404.module.css'
import error404 from 'assets/erro_404.png'
import ButtomMain from 'Components/ButtomMain/ButtomMain'
import { useNavigate } from 'react-router-dom'

const NotFound404 = () => {
  const navite = useNavigate()

  return (
    <>
      <div className={styles.contentContainer}>
        <span className={styles.text_404}>404</span>

        <h1 className={styles.title}>
          Not Found
        </h1>

        <p className={styles.paragraph}>
          Tem certeza que era isso que você está procurando?
        </p>

        <p className={styles.paragraph}>
          Aguarde uns instantes recarregue a página,obrigado!
        </p>

        <div className={styles.buttomContainer}
          onClick={() => navite('/')}
        >
          <ButtomMain size="lg">Voltar</ButtomMain>
        </div>

        <img
          className={styles.imageDog}
          src={error404}
          alt='Dog vestido de como gente'
        />

      </div>
      <div className={styles.whiteSpace}></div>
    </>
  )
}

export default NotFound404
