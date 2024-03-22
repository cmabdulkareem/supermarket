var express = require('express');
var router = express.Router();
var productHelper= require("../helpers/product-helpers")

/* GET home page. */
router.get('/', function(req, res, next) {

  productHelper.getAllProducts((err, fruits) => {
    if(err) {
      console.log(err);
    } else {
        console.log(fruits._id);
      res.render('index', { fruits, admin: false });
    }
  });

});

module.exports = router;
