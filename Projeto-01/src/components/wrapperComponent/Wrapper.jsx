import { Post } from '../postComponent/Post';
import { Sidebar } from '../sidebarComponent/Sidebar';
import styles from './Wrapper.module.css';

export function Wrapper(){
    return(
        <div className={styles.wrapper}>
          
          <Sidebar />
          
          <main>
            <Post
              author="Tharlison Silva"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
            />
            <Post
              author="Julia Morais"
              content="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
            />

          </main>

        </div>
    );
}