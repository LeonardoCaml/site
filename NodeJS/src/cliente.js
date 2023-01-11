const Sequelize = require('sequelize');
const database = require('../src/db');

const cliente = database.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(60),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(60),
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING(60),
        allowNull: false
    }
})

//cliente.sync({force: true})