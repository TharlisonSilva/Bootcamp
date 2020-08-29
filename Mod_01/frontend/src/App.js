import React, {useState, useEffect} from 'react';
import api from './services/api';

import './App.css';

// USANDO IMAGEM.
//import backgroundImage from './assets/background.jpg'
//<img width="500" src={backgroundImage} />
  

import Header from './components/Header';

function App(){
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject(){
        //setProjects([...projects,`Novo Projeto ${Date.now()}`]);
        
        const response = await api.post('projects',{
            title: `Novo Projeto ${Date.now()}`,
            owner: 'Tharlison'
        });

        const project = response.data;

        setProjects([...projects, project]);
    };

    return (
        <>
        <Header title="HomePage" />          
        <ul>
            {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>
        <button type="button" onClick={handleAddProject}>Adicionar</button>
        </>
    );
}

export default App;