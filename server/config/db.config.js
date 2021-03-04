// var mysql = require('mysql')
//
// var con = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'root',
//     database: 'team-health-check-db',
//     port: 3306
// })
//
// //connect to mysql
// con.connect(function(err) {
//     // in case of error
//     if(err) {
//         console.log(err.code)
//         console.log(err.fatal)
//     } else {
//         console.log("connected to db!")
//     }
//
// })

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "team-health-check-db",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}