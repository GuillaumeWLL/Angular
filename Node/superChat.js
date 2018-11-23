var http = require( 'http' ) ;
var fs = require ( 'fs' ) ;

var server = http.createServer( function ( req, res ) {
  fs.readFile( './superChat.html' , 'utf-8' , function( error , content) {
    res.writeHead(200 , { "Content-Type": "text/html" }) ;
    res.end( content ) ;
  }) ;
}) ;
// on a créé un serveur qui se connecte a la page superChat.html lorsqu'on s'y connecte

var io = require( 'socket.io' ).listen( server ) ; //on crée le socket qui écoute le serveur

io.sockets.on( 'connection' , function( socket, pseudo ) {
/* a chaque nouvel connexion  on ajoute le pseudo du nouvel utilisateur*/
  socket.on( 'newMember' , function( pseudo ) {
    socket.pseudo = pseudo ;
/* on broadcast le nouveau user a tous les clients */
    socket.broadcast.emit( 'newOne' , { name : socket.pseudo } ) ;
  }) ;
/* on log les entrées du clavier de chaque utilisateur */
  socket.on( 'message' , function( message ) {
    socket.broadcast.emit( 'message' , { pseudo: socket.pseudo , message: message }) ;
  }) ;
}) ;

server.listen( 8080 ) ;
