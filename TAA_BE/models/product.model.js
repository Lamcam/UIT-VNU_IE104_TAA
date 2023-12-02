const { param } = require("jquery");
const db = require("../config/db");

function producthModel() {}

producthModel.getAllProduct = (searchValue, callback) => {
  const params = [];
  let sql = `
    SELECT *, prod_cost - prod_cost * IFNULL(prod_discount, 0) as prod_cost_after
    FROM products
    INNER JOIN productsimg
        ON products.prod_id = productsimg.prod_id
    INNER JOIN categories
        on products.cate_id = categories.cate_id
        WHERE 1=1`;
  if (searchValue) {
    if (searchValue.search) {
      sql += ` AND prod_name LIKE ?`;
      params.push(`%${searchValue.search}%`);
    }
    if (searchValue.discount) {
      sql += ` ORDER BY prod_discount DESC`;
    }
    if (searchValue.bestseller) {
      sql += ` ORDER BY prod_num_sold DESC`;
    }
    if (searchValue.costAZ) {
      sql += ` ORDER BY prod_cost_after ASC`;
    }
    if (searchValue.costZA) {
      sql += ` ORDER BY prod_cost_after DESC`;
    }
  }
  db.query(sql, params, (err, result) => {
    callback(err, result);
  });
};

// producthModel.getSortProduct = (searchValue, callback) => {
//     const params = [];
//     let sql = `
//     SELECT *
//     FROM products
//     INNER JOIN productsimg
//         ON products.prod_id = productsimg.prod_id
//     INNER JOIN categories
//         on products.cate_id = categories.cate_id
//         WHERE 1=1`;
//     if (searchValue) {
//         if (searchValue.q) {
//             sql += ` AND prod_name LIKE ?`;
//             params.push(`%${searchValue.q}%`);
//         }
//         if (searchValue.discount) {
//             sql += ` ORDER BY prod_discount DESC`;
//         }
//         if (searchValue.bestseller) {
//             sql += ` ORDER BY prod_num_sold DESC`;
//         }
//         if (searchValue.costAZ) {
//             sql += ` ORDER BY prod_cost ASC`;
//         }
//         if (searchValue.costZA) {
//             sql += ` ORDER BY prod_cost DESC`;
//         }
//     }
//     db.query(sql, params, (err, result) => {
//         callback(err, result);
//     });
// };

producthModel.getCategory = ({ category }, callback) => {
  const params = [category];
  console.log("param: ", params);

  const sql = `SELECT *
    FROM products
    INNER JOIN productsimg
        ON products.prod_id = productsimg.prod_id
    INNER JOIN categories
        on products.cate_id = categories.cate_id
    WHERE categories.cate_name = ? ;`;

  db.query(sql, params, (err, result) => {
    // console.log("this result1",result);
    callback(err, result);
  });
};

producthModel.getHotProduct = (callback) => {
  const sql = `
        SELECT *
        FROM products
        INNER JOIN productsimg
            ON products.prod_id = productsimg.prod_id
        INNER JOIN categories
            on products.cate_id = categories.cate_id
        WHERE prod_num_sold > 5;
    `;

  db.query(sql, (err, result) => {
    callback(err, result);
  });
};

producthModel.getByIds = ({ ids }, callback) => {
  const sql = `
    SELECT *
    FROM products
    INNER JOIN productsimg
        ON products.prod_id = productsimg.prod_id
    INNER JOIN categories
        on products.cate_id = categories.cate_id
    WHERE products.prod_id IN ('${ids.join("','")}');
  `;

  db.query(sql, (err, result) => {
    callback(err, result);
  });
};
producthModel.getByArrId = (idArr, prodQuan, callback) => {
  
    const sql = `
        SELECT *
        FROM products
        INNER JOIN productsimg
            ON products.prod_id = productsimg.prod_id
        INNER JOIN categories
            on products.cate_id = categories.cate_id
        WHERE products.prod_id IN ('${idArr.join("','")}') ;
      `;

    db.query(sql, (err, result) => { 
        callback(err, prodQuan, result);
    });
 
};

producthModel.getDetailProduct = ({ id }, callback) => {
  const sql = `
        SELECT *
        FROM products
        INNER JOIN productsimg
            ON products.prod_id = productsimg.prod_id
        INNER JOIN categories
            on products.cate_id = categories.cate_id
        WHERE products.prod_id='${id}'
    `;

  db.query(sql, (err, result) => {
    callback(err, result);
  });
};

module.exports = producthModel;
