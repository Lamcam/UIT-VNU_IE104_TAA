const db = require('../config/db')

function authModel() { }

authModel.addUser = ({ name, phone, email, pass }, callback) => {
  console.log(name, phone, email, pass)

  const sql = `
    INSERT INTO users
      (user_name, user_phone, user_email, user_pass)
    VALUES
      (?, ?, ?, ?);
  `;

  const params = [
    name, phone,
    email, pass,
  ];

  db.query(sql, params, (err, result) => {
    callback(err, result);
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