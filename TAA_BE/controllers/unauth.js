function unAuth() { }

unAuth.registerPost = (req, res) => {
  const { name, fName, phone, email, pasword, confirmPass } = req.body;

  models.unAuth.checkIfAccountExists({ name }, (err, result) => {
    if (err) throw err;

    if (result) {
      res.status(404).json({
        msg: 'Account already exists'
      })
    } else {
      const encrypPass = md5(pasword);
      const cleanName = sanitizeHtml(name);
      const cleanNumber = sanitizeHtml(phone);
      const cleanEmail = sanitizeHtml(email);

      models.unAuth.createAccount({ cleanName, cleanNumber, cleanEmail, encrypPass }, (err, result) => {
        if (err) throw error;
        else {
          console.log("done");
          res.redirect("/");
        }
      })
      res.status(200).json({


      })
    }
  })
}
module.exports = unAuth