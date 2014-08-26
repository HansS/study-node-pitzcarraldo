var mysql = require('mysql');

//mysql://b5ecd12bd2d4fc:680a73ae@eu-cdbr-west-01.cleardb.com/heroku_241cdd1ffcca241?reconnect=true
var connection = mysql.createConnection({
    host    : 'eu-cdbr-west-01.cleardb.com',
    port    : 3306,
    user    : 'b5ecd12bd2d4fc',
    password : '680a73ae',
    database : 'heroku_241cdd1ffcca241'
});

exports.getNoteList = function(_callback) {
    connection.query('SELECT * FROM memo', function(err, rows){
        console.log(rows);
        //connected! (unless 'err' is set)

        _callback(rows);
    });
};

exports.writeNote = function(author, contents, ip_addr, _callback) {
    var date = new Date();

    date = date.getUTCFullYear() + '-'
        + ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' + date.getUTCDate() + ' '
        + ('00' + date.getUTCHours()).slice(-2) + ':'
        + ('00' + date.getUTCMinutes()).slice(-2) + ':'
        + ('00' + date.getUTCSeconds()).slice(-2);


    connection.beginTransaction(function(err) {
        if (err) {
            throw err;
        }

        var memo = {
            author : author,
            contents : contents,
            date : date
        };

        connection.query('INSERT INTO memo SET ?', memo, function(err, result){
            if(err){
                console.error(err);
                connection.rollback(function () {
                    console.error('rollback when insert');
                    throw err;
                });
            }else{
                //connection.query('INSERT INTO memo_hist SET')
                console.log('dao.writeNote() - '+result);

                connection.query('SELECT LAST_INSERT_ID() as id', function(err, rows){

                    var memo_hist = {
                        hist_type : 'INSERT',
                        _id : rows[0].id,
                        author : author,
                        contents : contents,
                        date : date,
                        ip_addr : ip_addr
                    };

                    connection.query('INSERT INTO memo_hist SET ?', memo_hist, function(err, hist_result){
                        if (err) {
                            console.error(err);
                            connection.rollback(function () {
                                console.error('rollback when hist insert');
                                throw err;
                            });
                        }
                        connection.commit(function (err) {
                            if (err) {
                                console.error(err);
                                connection.rollback(function () {
                                    console.error('commit error & rollback ');
                                    throw err;
                                });
                            }
                            _callback(hist_result);
                        });
                    });
                });
            }
        });

    });


};

exports.deleteNote = function(_id, ip_addr, _callback){

    var where = {"_id": _id};

    connection.beginTransaction(function(err) {
        if (err) {
            throw err;
        }
        connection.query('DELETE FROM memo WHERE ?', where, function(err, result) {
            if(err){
                console.error(err);
                connection.rollback(function () {
                    console.error('rollback when insert');
                    throw err;
                });
            }else{

                var memo_hist = {
                    hist_type : 'DELETE',
                    _id : _id,
                    ip_addr : ip_addr
                };

                connection.query('INSERT INTO memo_hist SET ?', memo_hist, function(err, hist_result){
                    if (err) {
                        console.error(err);
                        connection.rollback(function () {
                            console.error('rollback when hist insert');
                            throw err;
                        });
                    }
                    connection.commit(function (err) {
                        if (err) {
                            console.error(err);
                            connection.rollback(function () {
                                console.error('commit error & rollback ');
                                throw err;
                            });
                        }
                        _callback(hist_result);
                    });
                });

            }
        });
    });

};

exports.modifyNote = function(_id, contents, ip_addr, _callback) {

    var updateContents = {"contents" : contents};
    var updateId = {"_id" : _id};

    var bindVar = [updateContents, updateId];

    connection.beginTransaction(function(err) {
        if (err) {
            throw err;
        }

        connection.query('UPDATE memo SET ? WHERE ?', bindVar,function(err, result){
            if(err){
                console.error(err);
                connection.rollback(function () {
                    console.error('rollback when insert');
                    throw err;
                });
            }else{

                var memo_hist = {
                    hist_type : 'UPDATE',
                    _id : _id,
                    contents : contents,
                    ip_addr : ip_addr
                };

                connection.query('INSERT INTO memo_hist SET ?', memo_hist, function(err, hist_result){
                    if (err) {
                        console.error(err);
                        connection.rollback(function () {
                            console.error('rollback when hist insert');
                            throw err;
                        });
                    }
                    connection.commit(function (err) {
                        if (err) {
                            console.error(err);
                            connection.rollback(function () {
                                console.error('commit error & rollback ');
                                throw err;
                            });
                        }
                        _callback(hist_result);
                    });
                });
            }
        });
    });

};