var express = require('express');
var router = express.Router();

/* GET home page. */
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


  res.render('index', { fruits, admin:false });
});

module.exports = router;
