var mysql = require('mysql');

//mysql://b5ecd12bd2d4fc:680a73ae@eu-cdbr-west-01.cleardb.com/heroku_241cdd1ffcca241?reconnect=true
//pool 생성
var pool = mysql.createPool({
    host    : 'eu-cdbr-west-01.cleardb.com',
    port    : 3306,
    user    : 'b5ecd12bd2d4fc',
    password : '680a73ae',
    database : 'heroku_241cdd1ffcca241',
    connectionLimit:20,
    waitForConnections:false
});


exports.getUser = function(userId, _callback) {


    return pool.getConnection(function(err,connection){
        return connection.query('SELECT * FROM users WHERE userId = ?',  userId, function(err, rows){
            console.log(rows);

            //release connection!
            connection.release();
            return rows[0];
        });
    });
};

exports.registerUser = function(userId, password, _callback) {

    pool.getConnection(function(err,connection){
        connection.beginTransaction(function(err) {
            if (err) {
                throw err;
            }

            var user = {
                userId : userId,
                password : password,
                registeredAt : new Date()
            };

            connection.query('INSERT INTO users SET ?', user, function(err, result){
                if(err){
                    console.error(err);
                    connection.rollback(function () {
                        console.error('rollback when insert');
                        //release connection!
                        connection.release();
                        throw err;
                    });
                }
                console.log(result);
                connection.commit(function(err){
                    console.log('test');
                   // connection.release();
                });
            });
        });
    });
};