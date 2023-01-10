//conexão com o MySQL
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'leonardo',
    password: 'leozin',
    database: 'login_teste_contabilidade'
});
    //checando erros
connection.connect((err) => {
    if (err) {
        console.error('erro connecting:' + err.stack);
        return;
    }

    console.log('connnected as id ' + connection.threadId);
});
    //acessando o banco de dados e executando funções
connection.query('select * from cliente', function(err, rows, fields){
    if(!err){
        console.log('resultado: ', rows);
    } else {
        console.log('erro ao realizar a consulta');
    }
})

//