import React from 'react'
import styles from './AboutMe.module.css'
import PostsModels from 'Components/PostsModels/PostsModels'
import fotoCapa from 'assets/sobre_mim_capa.png'
import photoAboutMe from 'assets/Sobre_mim_foto.png'

const AboutMe = () => {

  return (
    <PostsModels
      fotoCapa={fotoCapa}
      titulo="Sobre Mim"
    >
      <h3 className={styles.subtitulo}>
        Olá eu sou o Eduardo
      </h3>

      <img
        src={photoAboutMe}
        alt='Edu espontâneo'
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou desenvolver full-stack na origin9 e estou feliz de te ver por aqui.
      </p>
      <p className={styles.paragrafo}>
        Minha trajetória na programação teve início quando me senti insatisfeito no meu emprego anterior na Dimep SP, onde atuava como analista de campo. Em uma conversa com meu amigo Tiago, que é programador, ele destacou meu raciocínio lógico e sugeriu que eu poderia ter sucesso na área de desenvolvimento de software. Influenciado por essa sugestão, segui a indicação dele para fazer um curso ministrado pelo instrutor backend Erick-Wendel, onde adquiri conhecimentos fundamentais de JavaScript, como tipos de variáveis, objetos e funções. Essa experiência despertou minha paixão pela programação, levando-me a decidir iniciar a faculdade.
      </p>
      <p className={styles.paragrafo}>
        Optei por cursar Análise e Desenvolvimento de Sistemas no Centro Universitário Campo Limpo Paulista (UNIFACCAMP) durante o ensino superior. Nessa jornada, concentrei-me em aprimorar meu raciocínio lógico, direcionando-me especialmente para a área de programação. Além disso, tive a oportunidade de aprofundar meus conhecimentos em desenvolvimento web.
      </p>
      <p className={styles.paragrafo}>
        Foi então que decidi buscar uma oportunidade de estágio na área de desenvolvimento web. Encontrei uma vaga na prefeitura de Campo Limpo Paulista, para integrar a equipe da controladoria no cargo de estagiário frontend. Percebi que essa oportunidade unia duas paixões minhas: programação e a conveniência de trabalhar próximo à minha residência. Para minha alegria, fui selecionado para fazer parte desse time.
      </p>
      <p className={styles.paragrafo}>
        Desde então, minha jornada tem sido marcada por contínuos aprendizados. Quando estava prestes a completar um ano de estágio na prefeitura de Campo Limpo Paulista, recebi uma proposta para ingressar na Origin9, empresa na qual estou atualmente. Aqui, tenho a oportunidade de trabalhar em projetos full-stack, ampliando não apenas meus conhecimentos técnicos, mas também minha compreensão sobre como o universo do desenvolvimento opera em termos de datas de entrega e prazos.
      </p>
      <p className={styles.paragrafo}>
        Estou extremamente feliz por ter a oportunidade de contribuir para a construção de sistemas robustos e complexos, que desempenham um papel fundamental em auxiliar nossos clientes. Essa experiência tem sido enriquecedora, proporcionando um crescimento profissional significativo.
      </p>
      <p>

      </p>
    </PostsModels>
  )
}

export default AboutMe
