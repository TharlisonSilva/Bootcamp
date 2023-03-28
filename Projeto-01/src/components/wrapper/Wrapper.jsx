import { Post } from '../post/Post';
import { Sidebar } from '../sidebar/Sidebar';

import styles from './Wrapper.module.css';

const posts = [
  {
    id: 1,
    author:{
      avatharUrl: 'https://github.com/TharlisonSilva.png',
      name: 'Tharlison Silva',
      role: 'Developer Full Stack',
    },
    content: [
      {type: 'paragraph', content: 'Eai pessoal esse é um projeto que estou subindo para pratica e estudo de react.'},
      {type: 'paragraph', content: 'Aqui ira conter varios projetos com o intuido de praticar o que venho estudando, de forma pratica!'},
      {type: 'link', content: '👉 https://github.com/TharlisonSilva/Bootcamp'},
    ],
    publishedAt: new Date('2023-03-27 22:00:00')
  },
  {
    id: 2,
    author:{
      avatharUrl: 'https://github.com/pedroaway.png',
      name: 'Pedro Silva',
      role: 'Developer Front-end',
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal, esse é foi um desafio que participei para uma vaga em python.'},
      {type: 'paragraph', content: 'A ideia do projeto é ter uma rest-full em python conectando em um banco de dados sql, vejam e me digam o que acharam'},
      {type: 'link', content: '👉 https://github.com/pedroaway/DesafioApCoders'},
    ],
    publishedAt: new Date('2023-02-27 22:00:00')
  }
];



export function Wrapper(){
    return(
        <div className={styles.wrapper}>
          
          <Sidebar />
          
          <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt} 
                />
              )
            })}
          </main>

        </div>
    );
}