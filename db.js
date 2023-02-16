const mysql = require('mysql2')

const mysqlConnection = mysql.createConnection({
    
        host: '*****************',
        user: 'doadmin',
        password: '*********',
        database:'defaultdb' ,
        port:***,
});
mysqlConnection.connect(function (error){
    if(error)
    {
        console.log(error);
        return;
    }
    else{
        console.log('Successfully connected to the database');
    }
});
module.exports = mysqlConnection;
