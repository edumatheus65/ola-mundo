import React from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import posts from 'json/posts.json'
import './Post.css'
import styles from './Post.module.css'
import PostsModels from 'Components/PostsModels/PostsModels'
import NotFound404 from 'Pages/NotFound404/NotFound404'
import DefaultPage from 'Components/DefaultPage/DefaultPage'
import PostCard from 'Components/PostsCard/PostCard'

const Post = () => {
  const params = useParams()

  const post = posts.find((post) => {
    return post.id === Number(params.id)
  })

  if (!post) {
    return <NotFound404 />
  }

  const recomendedPost = posts
    .filter((post) => post.id !== Number(params.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 3)   

  return (
    <DefaultPage>
      <PostsModels
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className='post-markdown-container'>
          <ReactMarkdown>
            {post.texto}
          </ReactMarkdown>
        </div>

        <h2 className={styles.titleOtherPosts}>
          Outros posts que você pode gostar!
        </h2>

        <ul className={styles.recomendedPost}>
          {recomendedPost.map((post) => (
            <li key={post.id}>
              <PostCard post={post}/>
            </li>
          ))}
        </ul>
      </PostsModels>
    </DefaultPage>
  )
}

export default Post
