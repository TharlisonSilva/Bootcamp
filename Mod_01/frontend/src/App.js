import React, {useState, useEffect} from 'react';
import api from './services/api';

import './App.css';

// USANDO IMAGEM.
//import backgroundImage from './assets/background.jpg'
//<img width="500" src={backgroundImage} />
  

import Header from './components/Header';

function App(){
    const projetos = ['Desenvolvimento de app', 'Front-react app'];
    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response);
        });
    }, []);

    return (
        <>
        <Header title="HomePage">          
            <ul>
                <li>HomePages</li>
                <li>Projects</li>
            </ul>
        </Header>
        </>
    );
};

export default App;