const sql = require('mssql');
const config =  {
  user: "heleneselme_dk",
  password: "k2fdj7i1",
  server: "mssql4.unoeuro.com",
  database: "heleneselmernielsen_dk_db"
};


app.get('/getData', (req, res, next) =>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');


   sql.connect(config, function (err) {

       if (err) console.log(err);

       // create Request object
       var request = new sql.Request();

       // query to the database and get the records
       request.query('select * from RatingRate order by createDate desc', function (err, { recordset }) {

           if (err) console.log(err)

            res.send(recordset);
            sql.close();

       });

   });

})
