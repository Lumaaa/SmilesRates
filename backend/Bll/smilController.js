var allDataDal = require("../DAL/smilCount.js");

module.exports.getAllData = function(smile){
    allDataDal.getAllData(smile);
}

module.exports.InsertData = function(data, callback){
    allDataDal.insertData(data, function(datas){
        callback(datas);
    })
}

// export.create = (req, res) => {
//   if(!req.body) {
//        return res.status(400).send({
//            message: "Product content can not be empty"
//        });
//    }
//    const product = new Data({
//      verysad = req.body.verysad
//      sad = req.body.sad
//      tja = req.body.tja
//      happy = req.body.happy
//      veryhappy = req.body.veryhappy
//      sumsum = req.body.sumsum
//      rate = req.body.rate
//     click = req.body.click
//
//    });
//
//    product.save()
//  .then(data => {
//      res.send(data);
//  }).catch(err => {
//      res.status(500).send({
//          message: err.message || "Something wrong while creating the product."
//      });
//  });
// }
