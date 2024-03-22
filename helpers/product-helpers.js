var db = require("../config/connection");
module.exports={

    addProduct:(product,callback)=>{
        console.log(product)
        db.get().collection('product').insertOne(product).then((data)=>{
            console.log(data.insertedId)
            callback(data.insertedId)
        })
    },
    getAllProducts:(callback) =>{
        db.get().collection('product').find().toArray((err, products) =>{
            if (err){
                callback(err);
            }else{
                callback(null, products)
            }
            })
        }
    }