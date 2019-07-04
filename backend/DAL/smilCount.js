const sql = require('mssql');
//const data = require("../model/smil.js");
const config =  {
  user: "DatabaseUserName",
  password: "DatabasePassword",
  server: "Databaseurl",
  database: "DatabaseName"
};

module.exports.getAllData = function(callback){
  sql.connect(config, function (err) {

      if (err) console.log(err);

      // create Request object
      var request = new sql.Request();
      // query to the database and get the records

      request.query('select * from SmileysRating', function (err, { recordset } ) {

          if (err) console.log(err)



           var smile = JSON.stringify(recordset);
           smile = JSON.parse(smile);
           callback(smile);
           sql.close();
      });

  });

};

//creating our function for creating a service
module.exports.insertData = function (data, callback) {
  smil = data;
    //starting our connection to the db
    var conn = new sql.ConnectionPool(config).connect(function (err) {
        if (err) {
            console.log(err);
        }
            //Making a const of transaction
            const transaction = new sql.Transaction(conn);

        //starting a new transaction
        transaction.begin(function (err) {
            if (err) {
                console.log(err);
            }
                //starting a request with a transaction
              const request = new sql.Request(transaction);
            //starting our query to the db

            request.input('verysad',  smil.verysad)
            request.input('sad', smil.sad )
            request.input('tja', smil.happy )
            request.input('happy', smil.veryhappy )
            request.input('veryhappy', smil.sumsum )
            var d = new Date();

            request.input('sumsum', smil.sumsum )
            request.input('rate', smil.rate )
            request.input('click', smil.click )
            request.input('createDate', new Date())



            const s = 'insert into SmileysRating values ( @verysad, @sad, @tja, @happy, @veryhappy, @sumsum, @rate, @click, @createDate );'

            request.query( s, (err, recordsets, test ) => {
                if (err) {
                    console.log(err);
                } else {
                    //commited our transaction if there is no err
                    transaction.commit(err => {
                        if (err) {
                            console.log(err);
                        } else
                            //making sure we get the data as json
                            var datas = JSON.stringify(recordsets);
                            datas = JSON.parse(datas);
                            console.log("Transaction commited.");
                            callback(datas);
                            //closing our connection
                            conn.close();

                    })
                }
            });

        });

    });
}
