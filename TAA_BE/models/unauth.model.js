const db = require('../config/db')

function unAuthModel() { } 

unAuthModel.checkIfAccountExists = ({ f_reg_name }, callback) => {
    const sql = 'select * from users where user_name = ?'
    const params = [f_reg_name];

    db.query(sql, params, (err, result) => {
        callback(err, result)
    })
}
 
unAuthModel.createAccount = (  fname, phone,email, pass , callback) => {
    console.log(fname, phone,email, pass)

    const sql = 'INSERT INTO users (user_id, user_name, user_phone, user_email, user_pass, user_avatar_url, loca_default_id) VALUES (?, ?, ?, ?, ?, ?, ?)'

    const params = ["0077",fname, phone, email, pass,"text","text"];

    db.query(sql, params, (err, result) => {
        callback(err, result);
    })

}

module.exports = unAuthModel
