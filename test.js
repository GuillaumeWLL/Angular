var express = require('express');

var app = express();
/*
app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Vous êtes à l\'accueil');
});
app.get('/sous-sol', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
});

app.get('/etage/:etagenum/chambre', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  if( req.params.etagenum <'a'){
      res.render('chambre.ejs', {etage: req.params.etagenum});
  }
  else {
    res.send('ERROR');
  }
});

app.use(function(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.status(404).send('Page Introuvable');
});

app.get('/compter/:nombre', function(req, res){
  var noms = ['Robert', 'Jacques', 'David'];
  res.render('page.ejs', {compteur:req.params.nombre, noms: noms});
});
app.get('/user/:id', function(req, res, next){
  if( req.params.id === '0' ) next( 'route' );
  else next();
}, function( req , res , next ) {
  res.send( 'regular' );
})

app.get( '/user/:id' , function( req, res , next ) { // here is the next route
  res.send( 'special' );
});*/

var express = require('express');
var morgan = require('morgan');
var favicon = require ('serve-favicon');

var app = express();

app.use(morgan('combined'))
.use(express.static(__dirname + '/public'))
.use(favicon(__dirname + '/public/favicon.ico'))
.use(function(req, res) {
  res.send('Hello');
});
app.listen(8080);
