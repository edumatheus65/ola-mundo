import React, { Children } from 'react'
import styles from './PostsModels.module.css'

const PostsModels = ({ fotoCapa, titulo, children }) => {
   
    return (
        <article className={styles.postModeloContainer}>
            <div
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${fotoCapa})` }}
            ></div>

            <h2 className={styles.titulo}>
                {titulo}
            </h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>

        </article>
    )
}

export default PostsModels
