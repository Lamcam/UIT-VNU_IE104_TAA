const db = require("../config/db");

function newsModel() { }

newsModel.getNewsPost = ({ id }, callback) => {
  const sql = `
    SELECT *
    FROM products
    INNER JOIN productsimg
      ON products.prod_id = productsimg.prod_id
    INNER JOIN categories
      on products.cate_id = categories.cate_id
    WHERE products.prod_id = '${id}';
  `;
  db.query(sql, (err, result) => {
    callback(err, result);
  });
};

module.exports = newsModel;
