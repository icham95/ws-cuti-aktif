var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var mhs = require('./scratch/mhs')
var baak = require('./scratch/baak')
var chat = require('./scratch/chat')

io.on('connection', function(socket){
  mhs.uploadCuti(socket, io, request)
  mhs.uploadAktif(socket, io, request)
  mhs.getCutis(socket, io, request)
  mhs.getMhsAktif(socket, io, request)
  mhs.mhsPembayaranStatusTiga(socket, io, request)
  mhs.mhsPembayaranStatusTigaAktif(socket, io, request)
  mhs.gantiMhsCutiStatus(socket, io, request)
  mhs.mhsInsertCuti(socket, io, request)
  mhs.mhsInsertAktif(socket, io, request)

  baak.getPermintaan(socket, io, request)
  baak.getPermintaanAktif(socket, io, request)
  baak.getDiterimaAktifBaak(socket, io, request)
  baak.getDiterimaCutiBaak(socket, io, request)

  // baak.cancelPembayaranAdministrasiCuti(socket, io, request)
  // baak.cancelPembayaranAdministrasiAktif(socket, io, request)
  // baak.terimaPembayaranAdministrasiCuti(socket, io, request)
  // baak.terimaPembayaranAdministrasiAktif(socket, io, request)

  baak.gantiBaakCutiStatus(socket, io, request)
  baak.gantiBaakAktifStatus(socket, io, request)

  // baak_pm
  chat.sendMsgFromMhs(socket, io, request)
  chat.sendMsgFromBaak(socket, io, request)
  chat.getChat(socket, io, request)
  chat.getChatList(socket, io, request)
});

http.listen(7777, function(){
  console.log('listenings on *:7777');
});