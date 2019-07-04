const sql = require('mssql');
const data = require("../model/smil.js");
const config =  {
  user: "heleneselme_dk",
  password: "k2fdj7i1",
  server: "mssql4.unoeuro.com",
  database: "heleneselmernielsen_dk_db"
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
module.exports.insertData = function (verysad, sad, tja, happy, veryhappy, sumsum, rate, click, callback) {
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
              // const verysad = data.verysad
              // const sad = data.sad
              // const tja = data.tja
              // const happy = data.happy
              // const veryhappy = data.veryhappy
              // const sumsum = data.sumsum
              // const rate = data.rate
              // const click = data.click
            request.input('verysad',  verysad)
            request.input('sad', sad )
            request.input('tja', tja )
            request.input('happy', happy )
            request.input('veryhappy', veryhappy )
            var d = new Date();
            request.input('createDate', d.toLocaleString() )
            request.input('sumsum', sumsum )
            request.input('rate', rate )
            request.input('click', click )

            request.query('insert into SmileysRating ( verysad, sad, tja, happy, veryhappy, createDate, sumsum, rate, click ) values ( @verysad, @sad, @tja, @happy, @veryhappy, @createDate, @sumsum, @rate, @click );', (err, recordsets, result ) => {
                if (err) {
                    console.log(err);
                } else {
                    //commited our transaction if there is no err
                    transaction.commit(err => {
                        if (err) {
                            console.log(err);
                        } else {
                            //making sure we get the data as json
                            var datas = JSON.stringify(recordsets);
                            datas = JSON.parse(datas);
                            console.log("Transaction commited.");
                            callback(datas);
                            //closing our connection
                            conn.close();
                        }
                    })
                }
            });

        });

    });
}


//creating our function for creating a service
module.exports.insertData = function (data, callback) {
    //starting our connection to the db
      const request = new sql.Request();
            request.input('verysad',  data.verysad)
            request.input('sad', data.sad )
            request.input('tja', data.tja )
            request.input('happy', data.happy )
            request.input('veryhappy', data.veryhappy )
            var d = new Date();
            request.input('createDate', d.toLocaleString() )
            request.input('sumsum', data.sumsum )
            request.input('rate', data.rate )
            request.input('click', data.click )

            const script =  'insert into SmileysRating ( verysad, sad, tja, happy, veryhappy, createDate, sumsum, rate, click ) values ( @verysad, @sad, @tja, @happy, @veryhappy, @createDate, @sumsum, @rate, @click );'

            return new Promise(function(resolve, reject){
              request.query(script, function(err, datas){
                if(err) reject(err);
                resolve(datas)
                callback(datas)
              })
            })

}
