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

authModel.getUserByLogin = ({ phone }, callback) => {
  const sql = `
    SELECT *, COUNT(prod_id) AS count_cart
    FROM users
    LEFT JOIN cart
      ON cart.user_id = users.user_id
    WHERE user_phone = ?
    GROUP BY users.user_id, users.user_name, users.user_phone, users.user_email, users.user_pass, users.user_avatar_url;
  `;

  const params = [phone];

  db.query(sql, params, (err, result) => {
    callback(err, result)
  })
}

module.exports = authModel