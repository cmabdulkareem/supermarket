var express = require('express');
var router = express.Router();
var productHelpers = require("../helpers/product-helpers");



/* GET users listing. */
router.get('/', function(req, res, next) {

  let fruits = [    //let fruits = [{},{},{},{}]
    {
      name:"Apple",
      description:"kashmiri royal apple from Kashmir india",
      price : 200,
      image : "https://shorturl.at/fgmoE"
    },
    {
        name:"Orange",
        description:"Nagpur orange from Nagpur india",
        price : 75,
        image : "https://shorturl.at/hCLTU"
    },
    {
        name:"Kiwi",
        description:"Australian rich kiwi",
        price : 300,
        image : "https://shorturl.at/nAJVX"
    },
    {
        name:"Banana",
        description:"Banana Kadali from Kerala",
        price : 40,
        image : "https://shorturl.at/tyHQ7"
    },
  ]


  res.render('admin/view-products',{fruits, admin:true});
});

router.get('/add-products', function(req, res, next) {
  res.render('admin/add-products',{admin:true});
});


router.post('/add-products', function(req, res, next) {
  console.log(req.body);
  console.log(req.files.image);

  productHelpers.addProduct(req.body,(id)=>{
    let image = req.files.image
    console.log(id);
    image.mv('./public/product-images/'+id+'.jpg',function(err,done){
      if(!err){
        res.render('admin/add-products',{admin:true});
        
      }else{
        console.log(err);
      }
    })
  })

});

module.exports = router;
