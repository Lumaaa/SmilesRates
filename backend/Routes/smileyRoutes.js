var axios = require('axios');
var express = require("express");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();

var data = require("../model/smil.js");

var smilController = require("../Bll/smilController.js");

module.exports = router;

router.get('/getAllData', function (req, res) {
    var getAllData = smilController.getAllData((getAllData) => {
        res.json(getAllData);
    })
})

//Creating af post requst and using the bodyParser to get make the json to a js obj.
router.post('/createData', jsonParser, function (req, res) {
    //Creating our js obj from the requst
    const dataObj = new data(req.body.verysad, req.body.sad, req.body.tja, req.body.happy, req.body.veryhappy, req.body.sumsum, req.body.rate,req.body.click)
    //Calling a callback method from the controller that takes our js obj.
    const insertData = smilController.InsertData(dataObj, function (data) {
        //Returning data as json
        res.json(data);
      //  req.io.sockets.emit('createData', 'there is created a data');
    })
})


// router.post('/create', smilController.create )
