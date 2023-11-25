const db = require('../config/db')

function authModel() { }

authModel.getAllUser = (callback) => {
    const sql = `
        SELECT *
        FROM USERS;
    `;

    db.query(sql, (err, result) => {
        callback(err, result)
    })
}

authModel.getUserByLogin = ({ phone, pass }, callback) => {
    const sql = `
        SELECT *
        FROM USERS
        WHERE user_phone = ?
            AND user_pass = ?;
    `;
    const params = [phone, pass];

    db.query(sql, params, (err, result) => {
        callback(err, result)
    })
}

module.exports = authModel