const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./db");

//criando um bodyParser para recuperar dados do formulário
app.use(bodyParser.urlencoded({extended: true}));

//definindo o arquivo html como arquivo a ser carregado
app.set('view engine', 'html');

//requerindo o arquivo
app.get('/',  (req, res) => {
    res.sendFile(__dirname + "/views/pagina.html");
});
app.post('/recebido',  (req, res) => {
    res.sendFile(__dirname + "/views/recebido.html");
});


//definindo um diretório estático de CSS e JavaScript
app.use(express.static(path.join(__dirname, 'public')));


app.listen(8080, () => {
    console.log("rodando");
})