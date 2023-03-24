import { Comment } from '../comment/Comment';
import styles from './Post.module.css';

export function Post(props){

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/TharlisonSilva.png" />
                    <div className={styles.authorInfo}>
                        <strong>Tharlison Silva</strong>
                        <span>Developer Full Stack</span>
                    </div>
                </div>

                <time title='23 Março de 2023 às 19:35' dateTime="2023-03-23 19:35">Publicado a 1hora</time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>  
                <p>Excepturi reiciendis consequatur voluptates sequi molestiae itaque vel qui distinctio eos? Molestiae.</p>
                <p>👉 {' '} <a href="#">https://github.com/TharlisonSilva/Bootcamp</a></p> 
                <p><a href="">#newProject</a> {' '}
                   <a href="">#StudyReact</a>
                </p> 
            </div>

            <form action="" className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe seu comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}