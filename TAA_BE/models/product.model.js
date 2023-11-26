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

producthModel.getDetailProduct = (callback) => {
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







module.exports = producthModel