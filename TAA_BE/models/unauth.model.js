const db = require('../config/db')

function unAuthModel() { }

unAuthModel.checkIfAccountExists = ({ name }, callback) => {
    const sql = 'select * from users where user_name = ?'
    const params = [name];

    db.query(sql, params, (err, result) => {
        callback(err, result)
    })
}

unAuthModel.createAccount = ({ name, phone, email, password }, callback) => {
    const sql = 'INSERT INTO users (user_id, user_name, user_phone, user_email, user_pass, user_avatar_url, loca_default_id)\
    VALUES (?, ?, ?, ?)'

    const params = [name, phone, email, password];

    db.inset(sql, params, (err, result) => {
        callback(err, result);
    })

}

module.exports = unAuthModel