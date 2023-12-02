// const express = require('express');
const models = require('../models')
const cookieParser = require('cookie-parser');
const index = require('./index')

function account() { }

const getInformation = (flags, req, res) => {
  const { id } = req.cookies;

  models.account.getInfo({ id }, (err, result) => {
    if (err) {
      res.status(500).json({
        statusCode: 500,
        msg: 'Internal Server Error',
      });
      return;
    };

    if (result.length == 0) {
      res.status(404).json({
        statusCode: 404,
        msg: 'Not Found',
      });
      return;
    }

    const data = {
      info: result[0],
    }

    models.account.getBanks({ id }, (err, result) => {
      if (err) {
        res.status(500).json({
          statusCode: 500,
          msg: 'Internal Server Error',
        });

        throw err;
      }

      data.banks = result;

      models.account.getLocas({ id }, (err, result) => {
        if (err) {
          res.status(500).json({
            statusCode: 500,
            msg: 'Internal Server Error',
          });

          throw err;
        }

        data.locas = result;

        models.account.getOrders({ id }, (err, result) => {
          if (err) {
            res.status(500).json({
              statusCode: 500,
              msg: 'Internal Server Error',
            });

            throw err;
          }

          data.orders = result;

          models.account.getFavorProducts({ id }, (err, result) => {
            if (err) {
              res.status(500).json({
                statusCode: 500,
                msg: 'Internal Server Error',
              });

              throw err;
            }

            data.favorProducts = index.groupProducts(result);

            res.status(200).render('pages/account/index', {
              // res.status(200).json({
              flags, data
            })
          })
        })
      })
    })
  })
}

account.information = (req, res) => {
  getInformation(0, req, res);
}

account.orders = (req, res) => {
  getInformation(1, req, res);
}

account.favorProducts = (req, res) => {
  getInformation(2, req, res);
}

account.cart = (req, res) => {
  const { id } = req.cookies;

  models.account.getCart({ id }, (err, result) => {
    if (err) throw err;

    result = result.map(item => item.prod_id);

    models.product.getByIds({ ids: result }, (err, result) => {
      if (err) throw err;

      res.status(200).render('pages/account/cart', {
        // res.status(200).json({
        statusCode: 200,
        msg: 'Found data product',
        data: index.groupProducts(result)
      })
    })
  })
}

account.cartAdd = (req, res) => {
  const { id } = req.cookies;
  const { prodId } = req.body;

  models.account.addCart({ id, prodId }, (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        // Handle duplicate entry error
        res.json({
          statusCode: 409,
          error: 'Conflict',
          message: 'The product is already in the cart.'
        });
      } else {
        // Handle other errors
        res.json({
          statusCode: 500,
          error: 'Internal Server Error',
          message: 'An error occurred while adding the product to the cart.'
        });
      }
    } else {
      res.json({
        statusCode: 200,
        msg: 'Add success'
      });
    }
  });
};

account.cartDelete = (req, res) => {
  const { id } = req.cookies;
  const { prodId } = req.body;

  models.account.delCart({ id, prodId }, (err, result) => {
    if (err) throw err;

    res.status(200).json({
      statusCode: 200,
      msg: 'Delete success'
    })
  })
}

account.order = (req, res) => {
  const { id } = req.cookies;
  const prodIdsOrder = req.cookies['prodIds--order'];
  const prodQuanitys = req.cookies['prodQuanitys--order'];
  let proIDs = prodIdsOrder.split(",");
  let prodQuan = prodQuanitys.split(',');
  models.product.getByArrId(proIDs, prodQuan, (err, arr, result) => {
    if (err) throw err;

    const data = index.groupProducts(result);
    res.status(200).render('pages/account/order', {
      data: data, data1: arr
    });
  })
}

account.orderPost = (req, res) => {
  const {
    order_datetime, id, prodIds,
    prodQuantities, prices, pay_id,
    bank_id, trans_id, loca_id
  } = req.body;

  models.account.addOrder({
    order_datetime, id,
    pay_id, bank_id,
    trans_id, loca_id,
  }, async (err, result) => {
    if (err) {
      res.status(500).json({
        statusCode: 500,
        msg: 'Internal Server Error',
      });
      throw err;
    }

    order_id = result.insertId;

    for (let i = 0; i < prodIds.length; i++) {
      await new Promise((resolve, reject) => {
        models.account.addOrderDetail({
          order_id, prod_id: prodIds[i],
          prod_quantity: prodQuantities[i],
          price: prices[i]
        }, (err, result) => {
          if (err) {
            res.status(500).json({
              statusCode: 500,
              msg: 'Internal Server Error',
            });
            throw err;
          }

          resolve();
        })
      })

      await new Promise((resolve, reject) => {
        models.account.delCart({
          id, prod_id: prodIds[i]
        }, (err, result) => {
          if (err) {
            res.status(500).json({
              statusCode: 500,
              msg: 'Internal Server Error',
            });
            throw err;
          }

          resolve();
        })
      })
    }

    res.status(200).json({
      statusCode: 200,
      msg: 'Order success'
    })
  })
}

module.exports = account