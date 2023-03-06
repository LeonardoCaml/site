const Sequelize = require("sequelize");
const sequelize  = new Sequelize('login_teste_contabilidade', 'root', '123654', {
    dialect: 'mysql',
    host: 'localhost'
})

sequelize.authenticate().then(function() {
    console.log('deu certo')
}).catch(function(erro) {
    console.log('nao deu certo, erro: '+erro)
})

module.exports = sequelize; 