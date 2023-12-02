const db = require('../config/db')

function accountModel() { }

accountModel.getInfo = ({ id }, callback) => {
  const sql = `
    SELECT user_name, user_phone, user_email, user_avatar_url, loca_default_id, bank_default_id
    FROM USERS
    WHERE user_id = ?;
  `;
  const params = [id];

  db.query(sql, params, (err, result) => {
    callback(err, result)
  })
}

accountModel.getBanks = ({ id }, callback) => {
  const sql = `
    SELECT *
    FROM BANKCARDS
    WHERE user_id = ?;
  `

  const params = [id];

  db.query(sql, params, (err, result) => {
    callback(err, result)
  })
}

accountModel.getLocas = ({ id }, callback) => {

  const sql = `
    SELECT *
    FROM LOCATIONS
    WHERE user_id = ?;
  `

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

accountModel.getFavorProducts = ({ id }, callback) => {
  const sql = `
    SELECT products.*, productsimg.prod_img_url
    FROM favorproducts
    INNER JOIN products
      on favorproducts.prod_id = products.prod_id
    INNER JOIN productsimg
      on products.prod_id = productsimg.prod_id
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

accountModel.addOrder = ({}, callback) => {
  const sql = 1
}

module.exports = accountModel