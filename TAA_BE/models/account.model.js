const db = require('../config/db')

function accountModel() { }

accountModel.getInfo = ({ id }, callback) => {
  const sql = `
    SELECT *
    FROM USERS
    WHERE user_id = ?;
  `;
  const params = [id];

  db.query(sql, params, (err, result) => {
    callback(err, result)
  })
}

accountModel.getOrders = ({ id }, callback) => {
  const sql = `
    SELECT *
    FROM ORDERS
    WHERE user_id = ?;
  `;

  const params = [id];

  db.query(sql, params, (err, result) => {
    callback(err, result)
  })
}

accountModel.getCart = ({ id }, callback) => {
  const sql = `
    SELECT prod_id
    FROM CART
    WHERE user_id = ?;
  `;

  const params = [id];

  db.query(sql, params, (err, result) => {
    callback(err, result)
  })
}

module.exports = accountModel