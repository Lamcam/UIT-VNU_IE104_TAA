// const express = require('express');
const models = require("../models");
const cookieParser = require("cookie-parser");
const index = require("./index");

function account() { }

const getInformation = (flags, req, res) => {
  const { id } = req.cookies;

  models.account.getInfo({ id }, (err, result) => {
    if (err) {
      res.status(500).json({
        statusCode: 500,
        msg: "Internal Server Error",
      });
      return;
    }

    if (result.length == 0) {
      res.status(404).json({
        statusCode: 404,
        msg: "Not Found",
      });
      return;
    }

    const data = {
      info: result[0],
    };

    models.account.getBanks({ id }, (err, result) => {
      if (err) {
        res.status(500).json({
          statusCode: 500,
          msg: "Internal Server Error",
        });

        throw err;
      }

      data.banks = result;

      models.account.getLocas({ id }, (err, result) => {
        if (err) {
          res.status(500).json({
            statusCode: 500,
            msg: "Internal Server Error",
          });

          throw err;
        }

        data.locas = result;

        models.account.getOrders({ id }, (err, result) => {
          if (err) {
            res.status(500).json({
              statusCode: 500,
              msg: "Internal Server Error",
            });

            throw err;
          }

          data.orders = result;

          models.account.getFavorProducts({ id }, (err, result) => {
            if (err) {
              res.status(500).json({
                statusCode: 500,
                msg: "Internal Server Error",
              });

              throw err;
            }

            data.favorProducts = index.groupProducts(result);

            res.status(200).render("pages/account/index", {
              // res.status(200).json({
              flags,
              data,
            });
          });
        });
      });
    });
  });
};

account.information = (req, res) => {
  getInformation(0, req, res);
};

account.orders = (req, res) => {
  getInformation(1, req, res);
};

account.favorProducts = (req, res) => {
  getInformation(2, req, res);
};

account.addFavorProducts = (req, res) => {
  const { id } = req.cookies;
  const { prod_id } = req.body;

  models.account.addFavorProducts({ id, prod_id }, (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        // Handle duplicate entry error
        res.json({
          statusCode: 409,
          error: 'Conflict',
          msg: 'The product is already in the favorites.'
        });
      } else {
        // Handle other errors
        res.json({
          statusCode: 500,
          error: 'Internal Server Error',
          msg: 'An error occurred while adding the product to the favorites.'
        });
        throw err;
      }
    } else {
      res.json({
        statusCode: 200,
        msg: 'Add success'
      });
    }
  })
}

account.delFavorProducts = (req, res) => {
  const { id } = req.cookies;
  const { prod_id } = req.body;

  models.account.delFavorProducts({ id, prod_id }, (err, result) => {
    if (err) throw err;

    res.status(200).json({
      statusCode: 200,
      msg: 'Delete success'
    })
  })
}

account.cart = (req, res) => {
  const { id } = req.cookies;

  models.account.getCart({ id }, (err, result) => {
    if (err) throw err;

    result = result.map((item) => item.prod_id);

    models.product.getProductsWithImg({ prod_ids: result }, (err, result) => {
      if (err) throw err;

      res.status(200).render("pages/account/cart", {
        // res.status(200).json({
        statusCode: 200,
        msg: "Found data product",
        data: index.groupProducts(result),
      });
    });
  });
};

account.addCart = (req, res) => {
  const { id } = req.cookies;
  const { prod_id } = req.body;

  models.account.addCart({ id, prod_id }, (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        // Handle duplicate entry error
        res.json({
          statusCode: 409,
          error: "Conflict",
          message: "The product is already in the cart.",
        });
      } else {
        // Handle other errors
        res.json({
          statusCode: 500,
          error: "Internal Server Error",
          message: "An error occurred while adding the product to the cart.",
        });
        throw err;
      }
    } else {
      res.json({
        statusCode: 200,
        msg: "Add success",
      });
    }
  });
};

account.delCart = (req, res) => {
  const { id } = req.cookies;
  const { prod_id } = req.body;

  models.account.delCart({ id, prod_id }, (err, result) => {
    if (err) throw err;

    res.status(200).json({
      statusCode: 200,
      msg: "Delete success",
    });
  });
};

account.order = (req, res) => {
  const { id } = req.cookies;
  const prod_ids = req.cookies["prod_ids--order"]?.split(",") ?? ['prod0001'];
  const quantities = req.cookies["prod_quantities--order"]?.split(",") ?? [1];

  const data = {};

  models.account.getInfo({ id }, (err, result) => {
    if (err) {
      res.status(500).json({
        statusCode: 500,
        msg: "Internal Server Error",
      });
      throw err;
    }

    data.user = result[0];

    models.product.getProductsWithImg({ prod_ids }, (err, result) => {
      if (err) {
        res.status(500).json({
          statusCode: 500,
          msg: "Internal Server Error",
        });
        throw err;
      }

      const products = index.groupProducts(result).map((item, index) => {
        return { ...item, quantity: quantities[index] };
      });

      data.products = products;

      models.account.getBanks({ id }, (err, result) => {
        if (err) {
          res.status(500).json({
            statusCode: 500,
            msg: "Internal Server Error",
          });
          throw err;
        }

        data.banks = result;

        models.account.getLocas({ id }, (err, result) => {
          if (err) {
            res.status(500).json({
              statusCode: 500,
              msg: "Internal Server Error",
            });
            throw err;
          }

          data.locas = result;

          res.status(200).render("pages/account/order", {
            // res.status(200).json({
            data,
          });
        });
      });
    });
  });
};

account.addLocal = (req, res) => {
  const { name, phone, address, detail } = req.body;
  const { id } = req.cookies;
  models.account.addLocal(
    { name, phone, address, detail, id },
    (err, result) => {
      if (err) {
        res.status(500).json({
          statusCode: 500,
          msg: "Internal Server Error",
        });
        throw err;
      }
      res.status(200).json({
        // statusCode: 200,
        // msg: 'success',
        name, phone, address, detail

      });
    }
  );
};

account.orderPost = (req, res) => {
  const {
    order_datetime,
    id,
    prod_ids,
    prod_quantities,
    prices,
    pay_id,
    bank_id,
    tran_id,
    loca_id,
  } = req.body;

  models.account.addOrder(
    {
      order_datetime,
      id,
      pay_id,
      bank_id,
      tran_id,
      loca_id,
    },
    async (err, result) => {
      if (err) {
        res.status(500).json({
          statusCode: 500,
          msg: "Internal Server Error",
        });
        throw err;
      }

      order_id = result.insertId;

      for (let i = 0; i < prod_ids.length; i++) {
        await new Promise((resolve, reject) => {
          models.account.addOrderDetail(
            {
              order_id,
              prod_id: prod_ids[i],
              prod_quantity: prod_quantities[i],
              price: prices[i],
            },
            (err, result) => {
              if (err) {
                res.status(500).json({
                  statusCode: 500,
                  msg: "Internal Server Error",
                });
                throw err;
              }

              resolve();
            }
          );
        });

        await new Promise((resolve, reject) => {
          models.account.delCart(
            {
              id,
              prod_id: prod_ids[i],
            },
            (err, result) => {
              if (err) {
                res.status(500).json({
                  statusCode: 500,
                  msg: "Internal Server Error",
                });
                throw err;
              }

              resolve();
            }
          );
        });
      }

      res.status(200).json({
        statusCode: 200,
        msg: "Order success",
      });
    }
  );
};

// account.localGet = (req,res)=> {
//   const { id } = req.cookies;
//   console.log("this is id",id);
//   models.account.getLocas( { id }, (err, result) => {
//     if (err) {
//       res.status(500).json({
//         statusCode: 500,
//         msg: 'Internal Server Error',
//       }); throw err;
//     }

//     // console.log(result[0].loca_id);
//     res.status(200).json({
//       result: result[0].loca_id,
//     });

// })
// }

module.exports = account;
