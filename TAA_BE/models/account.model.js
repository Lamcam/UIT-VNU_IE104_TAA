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

accountModel.addCart = ({id, prodId}, callback) => {
  const sql = `
    INSERT INTO CART (user_id, prod_id)
    VALUES (?, ?);
  `;

  const params = [id, prodId];

  db.query(sql, params, (err, result) => {
    callback(err, result)
  })
}

accountModel.deleteCart = ({ id, prodId }, callback) => {
  const sql = `
    DELETE FROM CART
    WHERE user_id = ? AND prod_id = ?;
  `;

  const params = [id, prodId];

  db.query(sql, params, (err, result) => {
    callback(err, result)
  })
}

module.exports = accountModel