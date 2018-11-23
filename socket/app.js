var http = require ('http');
var fs = require('fs');


//Chargement du fichier index.html affiché au client
var server = http.createServer( function( req , res ) {
  fs.readFile( './index.html' , 'utf-8' , function( error, content ) {
    res.writeHead(200, { "Content-Type": " text/html " } );
    res.end( content );
  });
});

//Chargement du socket.io
var io = require( 'socket.io' ).listen( server );

//Quand un client se connecte on le note dans la console
io.sockets.on( 'connection' , function( socket ) {
  console.log( 'Un client est connecté !');
});

io.sockets.on('connection' , function( socket ) {
  socket.emit( 'message' , 'Vous êtes bien connecté !' );
  socket.broadcast.emit( 'message' , 'Un autre client vient de se connecter !' );

  socket.on( 'petit_nouveau' , function( pseudo ) {
    socket.pseudo = pseudo ;
  });

  socket.on( 'message' , function( message ) {
    console.log(  socket.pseudo + ' me parle ! Il me dit :' + message );
  });


});

server.listen(8080);