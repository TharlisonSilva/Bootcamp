import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../avatar/Avatar';
import { Comment } from '../comment/Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }){
    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR,
    });

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true,
    });

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatharUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type == 'paragraph'){
                        return <p>{line.content}</p>
                    }else if(line.type == 'link'){
                        return <p> <a href="#">{line.content}</a> </p>
                    }
                })}
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