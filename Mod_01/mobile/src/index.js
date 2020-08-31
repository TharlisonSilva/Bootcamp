import React, {useEffect, useState} from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

import api from './services/api';


export default function App(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            //onsole.log(response.data);
            setProjects(response.data);
        });
    },[]);

    async function handleAddProject(){
        const response = await api.post('projects',{
            title: `Novo projeto ${Date.now()}`,
            owner: 'Tharlison silva'
        });

        const project = response.data;

        setProjects([...projects, project]);
    };

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <SafeAreaView style={styles.container}>
            <FlatList 
                data={projects}
                keyExtractor={project => project.id}
                renderItem={({item: project}) => (
                    <Text style={styles.project}ey={project.id}>{project.title}</Text>
                )}
            />

            <TouchableOpacity 
                activeOpacity={0.8} 
                style={styles.button} 
                onPress={handleAddProject}>
                <Text style={styles.buttonText}>Adicionar projeto</Text>
            </TouchableOpacity>
            </SafeAreaView>

        </>
    );
}


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#7159c1',
    },

    project:{
        color: '#FFF',
        fontSize: 30,
    },
    button:{
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        height: 50,
        margin: 20,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        fontWeight: 'bold',
        fontSize: 16,
    }
});