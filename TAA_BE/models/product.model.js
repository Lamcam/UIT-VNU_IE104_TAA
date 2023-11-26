const { param } = require('jquery');
const db = require('../config/db')

function producthModel() { }

producthModel.getAllProduct = (callback) => {
  const sql = `
        SELECT *
        FROM products
        INNER JOIN productsimg
            ON products.prod_id = productsimg.prod_id
        INNER JOIN categories
            on products.cate_id = categories.cate_id;
    `;

  db.query(sql, (err, result) => {
    callback(err, result)
  })
}
producthModel.getCategory = ( {category}, callback) =>{
    
    const params = [category];
    console.log("param: ",params);

    const sql = `SELECT *
    FROM products
    INNER JOIN productsimg
        ON products.prod_id = productsimg.prod_id
    INNER JOIN categories
        on products.cate_id = categories.cate_id
    WHERE categories.cate_name = ? ;`

    db.query(sql,params,(err,result)=>{
        // console.log("this result1",result);
        callback(err,result);
    })

}

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
    callback(err, result)
  })
}

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
    callback(err, result)
  })
}

producthModel.getDetailProduct = ({id},callback) => {
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
        callback(err, result)
    })
}







module.exports = producthModel