const express  = require('express');
const models = require('../models')
const db = require('../config/db');
const { error } = require('jquery');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function auth() {}

auth.loginPost = (req, res) => {
    const { name, pass } = req.body;
    
    models.auth.getUserByLogin({ name, pass }, (err, result) => {
        if (err) throw error;

        if (result.length == 0) {
            res.status(404).json({
                msg: 'Not match any account'
            })
        } else {
            res.status(200).json({
                msg: 'Found data account',
                data: {
                    result
                }
            })
        }
    })
    // db.query(sql, params, (err, result)=>{
    //     // if (error) throw error;
    //     // else {
    //     //     console.log(result);
    //     //     res.redirect("/");
    //     // }
    //     // if (result.length == 0) {
    //     //     //bao loi khong tim thay
    //     //     res.redirect("/");
    //     // }
    //     // else {

    //     //     res.redirect("/");
    //     // }
        
    // })

}

module.exports = auth