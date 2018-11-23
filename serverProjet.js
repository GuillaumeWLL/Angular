var http = require( 'http' ) ;
var mysql = require( 'mysql' ) ;

var connection = mysql.createConnection({
  host : 'localhost' ,
  user : 'root' ,
  password : 'root' ,
  database : 'Website',
  port : '8889'
}) ;

  var sql = 'SELECT * FROM USERS';
var sql2 = 'CALL getLevelByDifficulty(2)';
var cheese = [];

var server = http.createServer (function ( req , res ) {
    res.writeHead ( 200 , { "Content-Type" : "text/plain" }) ;
    res.write( 'Vous êtes bien ici') ;
    res.end() ;
  });

connection.connect(function(err) {
  if( err ){
    console.log( 'Error login DB : ' + err.message ) ;
    return ;
  }
  console.log( 'Connection established' ) ;

connection.query( sql , function( error , result , fields ) {
if ( error ){
  return console.error( error.message );
}
  console.log(result[0].user_name);
});
connection.end() ;
});
server.listen(8080) ;
