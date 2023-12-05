const db = require("../config/db");

function accountModel() {}

accountModel.getInfo = ({ id }, callback) => {
  const sql = `
    SELECT user_name, user_phone, user_email, user_avatar_url, loca_default_id, bank_default_id
    FROM USERS
    WHERE user_id = ?;
  `;
  const params = [id];

  db.query(sql, params, (err, result) => {
    callback(err, result);
  });
};

accountModel.getBanks = ({ id }, callback) => {
  const sql = `
    SELECT *
    FROM BANKCARDS
    WHERE user_id = ?;
  `;

  const params = [id];

  db.query(sql, params, (err, result) => {
    callback(err, result);
  });
};

accountModel.getLocas = ({ id }, callback) => {
  const sql = `
    SELECT *
    FROM LOCATIONS
    WHERE user_id = ?;
  `;

  const params = [id];

  db.query(sql, params, (err, result) => {
    callback(err, result);
  });
};

accountModel.getOrders = ({ id }, callback) => {
  const sql = `
    SELECT *
    FROM ORDERS
    WHERE user_id = ?;
  `;

  const params = [id];

  db.query(sql, params, (err, result) => {
    callback(err, result);
  });
};

accountModel.getIdFavorProducts = ({ id }, callback) => {
  const sql = `
    SELECT prod_id
    FROM favorproducts
    WHERE user_id = ?;
  `;

  const params = [id];

  db.query(sql, params, (err, result) => {
    callback(err, result);
  });
};

accountModel.getFavorProducts = ({ id }, callback) => {
  const sql = `
    SELECT products.*, categories.cate_name, productsimg.prod_img_url
    FROM favorproducts
    INNER JOIN products
      ON favorproducts.prod_id = products.prod_id
    INNER JOIN productsimg
      ON products.prod_id = productsimg.prod_id
    INNER JOIN categories
      ON products.cate_id = categories.cate_id
    WHERE user_id = ?;
  `;

  const params = [id];

  db.query(sql, params, (err, result) => {
    callback(err, result)
  })
}

accountModel.addFavorProducts = ({ id, prod_id }, callback) => {
  const sql = `
    INSERT INTO favorproducts (user_id, prod_id)
    VALUES (?, ?);
  `;

  const params = [id, prod_id];

  db.query(sql, params, (err, result) => {
    callback(err, result)
  })
}

accountModel.delFavorProducts = ({ id, prod_id }, callback) => {
  const sql = `
    DELETE FROM favorproducts
    WHERE user_id = ? AND prod_id = ?;
  `;

  const params = [id, prod_id];

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
    callback(err, result);
  });
};

accountModel.addCart = ({ id, prodId }, callback) => {
  const sql = `
    INSERT INTO CART (user_id, prod_id)
    VALUES (?, ?);
  `;

  const params = [id, prodId];

  db.query(sql, params, (err, result) => {
    callback(err, result);
  });
};

accountModel.delCart = ({ id, prod_id }, callback) => {
  const sql = `
    DELETE FROM CART
    WHERE user_id = ? AND prod_id = ?;
  `;

  const params = [id, prod_id];

  db.query(sql, params, (err, result) => {
    callback(err, result);
  });
};

accountModel.addOrder = (
  { order_datetime, id, pay_id, bank_id, tran_id, loca_id },
  callback
) => {
  const sql = `
    INSERT INTO orders
      (order_datetime, user_id, pay_id, bank_id, tran_id, loca_id, order_status, order_is_paying)
    VALUES
      (?, ${id}, '${pay_id}', ?, '${tran_id}', ?, ?, ?);
  `;

  const params = [
    order_datetime,
    bank_id,
    loca_id,
    0,
    pay_id[pay_id.length - 1],
  ];

  db.query(sql, params, (err, result) => {
    callback(err, result);
  });
};

accountModel.addOrderDetail = (
  { order_id, prod_id, prod_quantity, price },
  callback
) => {
  const sql = `
    INSERT INTO orderdetails
      (order_id, prod_id, quantity, price)
    VALUES
      (?, ?, ?, ?);
  `;

  const params = [order_id, prod_id, prod_quantity, price, prod_id];

  // console.log(params);

  db.query(sql, params, (err, result) => {
    callback(err, result);
  });
};

accountModel.addLocal = ({ name, phone, address, detail, id }, callback) => {
  const sql = `
    INSERT INTO locations
      (loca_pers_name, loca_pers_phone, loca_address, loca_detail, user_id )
    VALUES
      (?, ?, ?, ?, ?);
  `;
  const params = [name, phone, address, detail, id];

  console.log(params);

  db.query(sql, params, (err, result) => {
    callback(err, result);
  });
};

module.exports = accountModel;
