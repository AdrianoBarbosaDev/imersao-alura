import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

await conectarAoBanco(process.env.STRING_CONEXAO);

const app = express();
const dados = [
    {
     id:1, nome:"TESTE"
    },
    {
     id:2, nome:"TESTE2"
    },
    {
     id:3, nome:"TESTE3"
    }
];
app.use(express.json());

app.listen(3000,() => {
    console.log("Fala tu");
});

app.get("/api",(req,res) =>{
    res.status(200).send(dados);
});

function buscarPostPorId(id){
    return dados.findIndex((dado) =>{
        return dado.id === Number(id);
    })
}

app.get("/api/:id",(req,res) =>{
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(dados[index]);
});