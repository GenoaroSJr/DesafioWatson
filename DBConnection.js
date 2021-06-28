//require('dotenv').config({path:__dirname+'/../.env'});
require('dotenv').config();

const { Sequelize } = require("sequelize");
const connection = new Sequelize('comments', process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    define:{
        timestamps: false
    }
});


/*connection.authenticate().then(()=>{
    console.log("Conectado com sucesso")
}).catch((er)=>{
    console.log("Erro ao conectar",er);
})*/ 

module.exports = connection;