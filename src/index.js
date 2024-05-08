import express from 'express';
import cors from 'cors';
import {con} from "./config/database.js";

const app = express();

app.use(express.json());
app.use(cors());

//rotas
app.get('/olamundo', function(req, res){
    res.status(200).send("Eu sou o mio")
})

app.get("/produtos", function(req, res){
    con.query('select * from produto', function(err, result){
        if (err)
            return res.status(500).send("algo de errado não está certo: " + err.menssage);
        else
            return res.status(200).json(result);
    })
});

//levanta o server
app.listen(3001, function(){
    console.log('Orbiago')
})