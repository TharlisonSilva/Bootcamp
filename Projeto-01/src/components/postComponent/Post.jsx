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

                <time dateTime="2023-03-23 19:35">Publicado a 1hora</time>
            </header>
        </article>
    )
}