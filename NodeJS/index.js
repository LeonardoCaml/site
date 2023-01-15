// instancias usadas
const express = require('express');
const app = express();
const path = require('path')

//configurando body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//banco de dados
const database = require('./src/db');
const cliente = require('./src/cliente');

//rotas
app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + '/view/cadastro.html');
})

app.post('/recebido', (req, res) => {
    res.sendFile(__dirname + '/view/recebido.html');

    cliente.create({
        nome: req.body.nome,
        senha: req.body.senha,
        email: req.body.email
    })

})


app.listen(8080, () => {
    console.log('rodando');
});