const db = require('../config/db')

function producthModel() {}

producthModel.getAllProduct = (callback) => {
    
    const sql = 'SELECT * FROM products pro JOIN productsimg proI ON pro.prod_id = proI.prod_id';
    // const sql = 'SELECT * FROM products';

    db.query(sql, (err, result) => {
        callback(err, result)
    })
}








module.exports = producthModel