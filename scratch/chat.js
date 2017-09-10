exports.sendMsgFromMhs = function (socket, io, request) {
	socket.on('sendMsgFromMhs', function(data) {
	  	request.post('http://156.67.219.174/cutiff/api/chat/mhs', {
	  		form: {
		  		npm: data.npm,
		  		msg: data.msg
		  	},
		  	headers: {
		  		Authorization: data.token
		  	}
		  },function (error, response, body) {
			  io.emit('sendMsgFromMhsF', {
			  	npm: data.npm,
			  	resp: JSON.parse(body)
			  });
		});
	})
}

exports.sendMsgFromBaak = function (socket, io, request) {
	socket.on('sendMsgFromBaak', function(data) {
	  	request.post('http://156.67.219.174/cutiff/api/chat/baak', {
	  		form: {
		  		npm: data.npm,
		  		msg: data.msg
		  	},
		  	headers: {
		  		Authorization: data.token
		  	}
		  },function (error, response, body) {
			  io.emit('sendMsgFromBaakF', {
			  	npm: data.npm,
			  	resp: JSON.parse(body)
			  });
		});
	})
}

exports.getChat = function (socket, io, request) {
	socket.on('getChat', function(data) {
	  	request.get('http://156.67.219.174/cutiff/api/chat/get/' + data.npm, {
		  	headers: {
		  		Authorization: data.token
		  	}
		  },function (error, response, body) {
			  io.emit('getChatF', {
			  	npm: data.npm,
			  	resp: JSON.parse(body)
			  });
		});
	})
}

exports.getChatList = function (socket, io, request) {
	socket.on('getChatList', function(data) {
	  	request.get('http://156.67.219.174/cutiff/api/chat/list', {
		  	headers: {
		  		Authorization: data.token
		  	}
		  },function (error, response, body) {
			  io.emit('getChatListF', {
			  	resp: JSON.parse(body)
			  });
		});
	})
}