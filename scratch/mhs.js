exports.uploadCuti = function (socket, io, request) {
	socket.on('uploadCuti', function(data) {
	  	request.post('http://localhost/cutiff/api/mhs/cuti/upload_pic', {
	  		form: {
		  		id: data.id,
		  		pic: data.pic
		  	},
		  	headers: {
		  		Authorization: data.token
		  	}
		  },function (error, response, body) {
			  io.emit('uploadCutiFeedbacks', {
			  	npm: data.npm,
			  	resp: JSON.parse(body)
			  });
		});
	})
}

exports.uploadAktif = function (socket, io, request) {
	socket.on('uploadAktif', function(data) {
	  	request.post('http://localhost/cutiff/api/mhs/aktif/upload_pic', {
	  		form: {
		  		id: data.id,
		  		pic: data.pic
		  	},
		  	headers: {
		  		Authorization: data.token
		  	}
		  },function (error, response, body) {
			  io.emit('uploadAktifFeedback', {
			  	npm: data.npm,
			  	resp: JSON.parse(body)
			  });
		});
	})
}

exports.getCutis = function (socket, io, request) {
	socket.on('getCutis', function(data) {
		request.get('http://localhost/cutiff/api/mhs/cuti/' + data.npm, {
			headers: {
				Authorization: data.token
			}
		}, function (err, resp, body) {
			// console.log(body)
			cutis = JSON.parse(body)
			io.emit('getCutisFeedback', {
				npm: data.npm,
				resp: cutis
			})
		});
	})
}

exports.getMhsAktif = function (socket, io, request) {
	socket.on('getMhsAktif', function(data) {
		request.get('http://localhost/cutiff/api/mhs/aktif/' + data.npm, {
			headers: {
				Authorization: data.token
			}
		}, function (err, resp, body) {
			MhsAktif = JSON.parse(body)
			io.emit('getMhsAktifFeedback', {
				npm: data.npm,
				resp: MhsAktif
			})
		});
	})
}

exports.mhsPembayaranStatusTiga = function (socket, io, request) {
	socket.on('mhsPembayaranStatusTiga', function(data) {
		request.post('http://localhost/cutiff/api/mhs/cuti/pembayaran_status_tiga', {
	  		form: {
		  		id: data.id,
		  		rekening_id: data.rekening_id,
		  		no_rekening_mahasiswa: data.no_rekening_mahasiswa,
		  		jumlah: data.jumlah,
		  		catatan_lebih2: data.catatan_lebih2,
		  		pic: data.pic
		  	},
		  	headers: {
		  		Authorization: data.token
		  	}
		  },function (error, response, body) {
			datas = JSON.parse(body)
			io.emit('mhsPembayaranStatusTigaFeedback', {
				npm: data.npm,
				karyawan_id: data.karyawan_id,
				resp: datas
			})  
		});
	})
}

exports.mhsPembayaranStatusTigaAktif = function (socket, io, request) {
	socket.on('mhsPembayaranStatusTigaAktif', function(data) {
		request.post('http://localhost/cutiff/api/mhs/aktif/pembayaran_status_tiga', {
	  		form: {
		  		id: data.id,
		  		rekening_id: data.rekening_id,
		  		no_rekening_mahasiswa: data.no_rekening_mahasiswa,
		  		jumlah: data.jumlah,
		  		catatan_lebih2: data.catatan_lebih2,
		  		pic: data.pic
		  	},
		  	headers: {
		  		Authorization: data.token
		  	}
		  },function (error, response, body) {
			datas = JSON.parse(body)
			io.emit('mhsPembayaranStatusTigaAktifFeedback', {
				npm: data.npm,
				karyawan_id: data.karyawan_id,
				resp: datas
			})
		});
	})
}

exports.gantiMhsCutiStatus = function (socket, io, request) {
	socket.on('gantiMhsCutiStatus', function(data) {
		request.post('http://localhost/cutiff/api/mhs/cuti/ganti_mhs_cuti_status', {
	  		form: {
		  		id: data.cuti_id,
		  		status: data.status
		  	},
		  	headers: {
		  		Authorization: data.token
		  	}
		  },function (error, response, body) {
			datas = JSON.parse(body)
			io.emit('gantiMhsCutiStatusFeedback', {
				npm: data.npm,
				karyawan_id: data.karyawan_id,
				resp: datas
			})  
		});
	})
}

exports.mhsInsertCuti = function (socket, io, request) {
	socket.on('mhsInsertCuti', function(data) {
		data.mahasiswa.npm_id = data.npm
		request.post('http://localhost/cutiff/api/mhs/cuti/insert_cuti', {
	  		form: data.mahasiswa,
		  	headers: {
		  		Authorization: data.token
		  	}
		  },function (error, response, body) {
			datas = JSON.parse(body)
			io.emit('mhsInsertCutiFeedback', {
				npm: data.npm,
				resp: datas
			})
		});
	})
}

exports.mhsInsertAktif = function (socket, io, request) {
	socket.on('mhsInsertAktif', function(data) {
		data.mahasiswa.npm_id = data.npm
		request.post('http://localhost/cutiff/api/mhs/aktif/insert_aktif', {
	  		form: data.mahasiswa,
		  	headers: {
		  		Authorization: data.token
		  	}
		  },function (error, response, body) {
			datas = JSON.parse(body)
			io.emit('mhsInsertAktifFeedback', {
				npm: data.npm,
				resp: datas
			}) 
		});
	})
}