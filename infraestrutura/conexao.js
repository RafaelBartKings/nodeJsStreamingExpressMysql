const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'R26Etlm11!20',
    database: 'agenda-petshop'
});


module.exports = conexao;