import styles from './Header.module.css'
import imgIcon from '../assets/rocket.svg';
import { PlusCircle } from 'phosphor-react';

export function Header(){
    return (

        <header className={styles.header}>
            
            <div className={styles.container}>
                <img src={imgIcon} alt='Logo do TodoList' />
                <div className={styles.nameLogo}>
                    <h1 className={styles.to}>to</h1>
                    <h1 className={styles.do}>do</h1>
                </div>
            </div>

            <div className={styles.InputTask}>
                <input type="text" />
                <button>Criar <PlusCircle size={18}/> </button>
            </div>
            
        </header>

    )
}