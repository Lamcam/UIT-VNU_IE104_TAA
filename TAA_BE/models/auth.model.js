const db = require('../config/db')

function authModel() {}

authModel.getAllUser = (callback) => {
    
    const sql = 'select * from users';

    db.query(sql, (err, result) => {
        callback(err, result)
    })
}

authModel.getUserByLogin = ({ name, pass }, callback) => {

    const sql = 'select * from users where user_name = ? and user_pass = ?'
    const params = [ name, pass ];

    db.query(sql, params, (err, result) => {
        callback(err, result)
    })
} 

module.exports = authModel