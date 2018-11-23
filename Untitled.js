var express = require ( 'express' ) ; //add express to the project
var morgan = require ( 'morgan' ) ; // log requests to the console
var bodyParser = require ( 'body-parser' ) ; // pull information from HTML Post
/*var ngUniversal = require( '@nguniversal/express-engine' ) ;
var appServer = require( './dist-server/main.bundle' ) ;

function angularRouter( req , res ) {
  res.render( 'index' , { req , res }) ; //Server-side rendering
}*/
var app = express() ; // creation of the app

app.use( express.static(__dirname + '/public' )) ; //set the static files location /public/img
app.use( morgan( 'dev' ) ) ; // log every request to the console
app.use( bodyParser.urlencoded( { 'extended' : 'true' } ) ) ; //parse application /x-www-form-urlencoded
app.use( bodyParser.json() ) ; //parse application/json
app.use( bodyParser.json( { type : 'application/vnd.api+json' } ) ) ; //parse application /vnd.api+json as json

app.get( '/' , ( req , res ) => {
  res.render("page.ejs");
}) ;

app.post( '/' , ( req , res ) => {
  console.log( req.body ) ;
} ) ;


app.listen(8080 , () => {
  console.log( "hey you" ) ;
} ) ;
