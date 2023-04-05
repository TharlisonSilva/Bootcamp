import {PencilLine} from 'phosphor-react'
import { Avatar } from '../avatar/Avatar'

import styles from  './Sidebar.module.css'

export function Sidebar(){
    return (
        <div className={styles.sidebar}>
            <img className={styles.cover} 
                src='https://images.unsplash.com/photo-1542542925705-a80b9150c24b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40' 
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/TharlisonSilva.png" />

                <strong>Tharlison Silva</strong>
                <span>Developer Full Stack</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>   
        </div>
    )
}