const models = require("../models");
const md5 = require("md5");
const sanitizeHtml = require("sanitize-html");
function unAuth() { }

unAuth.registerPost = (req, res) => {
  const { fname, phone, email, pass, confirmPass } = req.body;
 console.log(fname, phone, email, pass, confirmPass)
 console.log(req.body);
  models.unAuth.checkIfAccountExists({ fname }, (err, result) => {
    
    if (err) throw err;

    if (!result) {
      console.log("control",result);
      res.status(404).json({
        msg: 'Account already exists'
      })
    } else {
      const encrypPass = md5(pass);
      const cleanName = sanitizeHtml(fname);
      const cleanNumber = sanitizeHtml(phone);
      const cleanEmail = sanitizeHtml(email);
      console.log("clenN",cleanName);
      console.log("clenN",cleanNumber);
      console.log("clenN",cleanEmail);
      console.log("clenN",pass);
      console.log("clenN",encrypPass);

      models.unAuth.createAccount( cleanName, cleanNumber, cleanEmail, encrypPass , (err, result) => {
        if (err) throw err;
        else {
          console.log("add done");
          res.redirect("/"); 
        }
      })
      // res.status(200).json({{}})


      
    }
  })
}
module.exports = unAuth