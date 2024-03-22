var express = require('express');
var router = express.Router();
var productHelper= require("../helpers/product-helpers")

/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelper.getAllProducts((err, fruits) => {
    if(err) {
      console.log(err);
    } else {
        console.log(fruits._id);
      res.render('admin/view-products', { fruits, admin: true });
    }
  });
});

router.get('/add-products', function(req, res, next) {
  res.render('admin/add-products',{admin:true});
});

router.post('/add-products', function(req, res, next) {
  console.log(req.body);
  console.log(req.files.Image);

  productHelper.addProduct(req.body,(insertedId)=>{
    let image = req.files.Image
    image.mv("./public/images/product-images/"+insertedId+".jpg",(err,done)=>{
      if(!err){
        res.render('admin/add-products',{admin:true});
      }else{
        console.log(err)
      }
    })
  })
});

module.exports = router;
