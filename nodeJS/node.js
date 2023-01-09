const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const bodyParser = require("body-parser");


//criando um bodyParser para recuperar dados do formulário
app.use(bodyParser.urlencoded({extended: true}));

//definindo o arquivo html como arquivo a ser carregado
app.set('view engine', 'html');

//requerindo o arquivo
router.get('/',  (req, res) => {
    res.sendFile(__dirname + "/views/cadastro.html");
});

router.get('/areadocliente',  (req, res) => {
    res.sendFile(__dirname + "/views/AreaDoCliente.html");
});

//definindo um diretório estático de CSS e JavaScript
app.use(express.static(path.join(__dirname, 'public')));





app.listen(8080, () => {
    console.log("rodando");
})