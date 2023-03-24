import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../avatar/Avatar';
import styles from './Comment.module.css';

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/TharlisonSilva.png" alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Tharlison Silva</strong>
                            <time title='23 Março de 2023 às 19:35' dateTime="2023-03-23 19:35">Publicado a 1hora atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Tharlison, Parabéns 👌</p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    );
}