const express = require("express");
const cors = require('cors');
const { uuid } = require("uuidv4");

const app = express();

app.use(cors());
app.use(express.json());

const projects = [];


app.get("/projects", (request, response)=>{
    return response.json(projects);
});

app.post("/projects", (request, response)=>{
    const {title, owner } = request.body;
    const project  = { id:uuid(), title, owner};

    projects.push(project);

    return response.json(project);
});


app.put("/projects/:id", (request, response)=>{
    
    const {id}    = request.params;
    const {owner} = request.body;
    
    const project = projects.find( x => x.id === id);
    if(project != null){
        project.owner = owner;
        projects[id] = project;
    }else{
        return response.json({Messagem:"Projeto não encontrado"});
    }
    return response.json(project);
});


app.delete("/projects/:id", (request, response)=>{
    const {id} = request.params;
    const project = projects.find(x => x.id === id);
    if(project != null){
        projects.pop(project);
    }else{
        return response.json({Mensagem:"Projeto não encontrado"});
    }
    return response.json(projects);
});



app.listen(3333,()=>{
    console.log("back-end started");
});