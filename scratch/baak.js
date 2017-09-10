exports.getPermintaan = function (socket, io, request) {
	socket.on('getPermintaan', function(data) {
		// console.log(data)
		request.get('http://156.67.219.174/cutiff/api/baak/cuti', {
			headers: {
				Authorization: data.token
			}
		}, function (err, resp, body) {
			datas = JSON.parse(body)
			io.emit('getPermintaanFeedback', {
				id: data.id,
				resp: datas
			})
		});
	})
}

exports.getDiterimaCutiBaak = function (socket, io, request) {
	socket.on('getDiterimaCutiBaak', function(data) {
		// console.log(data)
		request.get('http://156.67.219.174/cutiff/api/baak/cuti_diterima', {
			headers: {
				Authorization: data.token
			}
		}, function (err, resp, body) {
			console.log(body)
			datas = JSON.parse(body)
			io.emit('getDiterimaCutiBaakFeedback', {
				id: data.id,
				resp: datas
			})
		});
	})
}

exports.getPermintaanAktif = function (socket, io, request) {
	socket.on('getPermintaanAktif', function(data) {
		// console.log(data)
		request.get('http://156.67.219.174/cutiff/api/baak/aktif', {
			headers: {
				Authorization: data.token
			}
		}, function (err, resp, body) {
			datas = JSON.parse(body)
			io.emit('getPermintaanAktifFeedback', {
				id: data.id,
				resp: datas
			})
		});
	})
}

exports.getDiterimaAktifBaak = function (socket, io, request) {
	socket.on('getDiterimaAktifBaak', function(data) {
		// console.log(data)
		request.get('http://156.67.219.174/cutiff/api/baak/aktif_diterima', {
			headers: {
				Authorization: data.token
			}
		}, function (err, resp, body) {
			console.log(body)
			datas = JSON.parse(body)
			io.emit('getDiterimaAktifBaakFeedback', {
				id: data.id,
				resp: datas
			})
		});
	})
}

exports.cancelPembayaranAdministrasiCuti = function (socket, io, request) {
	socket.on('cancelPembayaranAdministrasiCuti', function(data) {
		request.post('http://156.67.219.174/cutiff/api/baak/cancel_pembayaran_administrasi_cuti', {
			headers: {
				Authorization: data.token
			},
			form: {
				npm: data.npm,
				id: data.cuti_id
			}
		}, function (err, resp, body) {
			datas = JSON.parse(body)
			io.emit('cancelPembayaranAdministrasiCutiFeedback', {
				id: data.id,
				npm: data.npm,
				resp: datas
			})
		})
	})
}


exports.terimaPembayaranAdministrasiCuti = function (socket, io, request) {
	socket.on('terimaPembayaranAdministrasiCuti', function(data) {
		request.post('http://156.67.219.174/cutiff/api/baak/terima_pembayaran_administrasi_cuti', {
			headers: {
				Authorization: data.token
			},
			form: {
				npm: data.npm,
				id: data.cuti_id
			}
		}, function (err, resp, body) {
			datas = JSON.parse(body)
			io.emit('terimaPembayaranAdministrasiCutiFeedback', {
				id: data.id,
				npm: data.npm,
				resp: datas
			})
		})
	})
}

exports.terimaPembayaranAdministrasiAktif = function (socket, io, request) {
	socket.on('terimaPembayaranAdministrasiAktif', function(data) {
		request.post('http://156.67.219.174/cutiff/api/baak/terima_pembayaran_administrasi_aktif', {
			headers: {
				Authorization: data.token
			},
			form: {
				npm: data.npm
			}
		}, function (err, resp, body) {
			datas = JSON.parse(body)
			io.emit('terimaPembayaranAdministrasiAktifFeedback', {
				id: data.id,
				npm: data.npm,
				resp: datas
			})
		})
	})
}

exports.cancelPembayaranAdministrasiAktif = function (socket, io, request) {
	socket.on('cancelPembayaranAdministrasiAktif', function(data) {
		request.post('http://156.67.219.174/cutiff/api/baak/cancel_pembayaran_administrasi_aktif', {
			headers: {
				Authorization: data.token
			},
			form: {
				npm: data.npm
			}
		}, function (err, resp, body) {
			datas = JSON.parse(body)
			io.emit('cancelPembayaranAdministrasiAktifFeedback', {
				id: data.id,
				npm: data.npm,
				resp: datas
			})
		})
	})
}

exports.gantiBaakCutiStatus = function (socket, io, request) {
	socket.on('gantiBaakCutiStatus', function (data) {
		request.post('http://156.67.219.174/cutiff/api/ganti_baak_cuti_status', {
			headers: {
				Authorization: data.token
			},
			form: {
				id: data.cuti_id,
				karyawan_id: data.id,
				status: data.status,
				catatan_lebih: data.catatan,
				tunggakan: data.tunggakan
			}
		}, function (err, resp, body) {
			datas = JSON.parse(body)
			io.emit('gantiBaakCutiStatusFeedback', {
				karyawan_id: data.id,
				npm: data.npm,
				resp: datas
			})
		})
	})
}

exports.gantiBaakAktifStatus = function (socket, io, request) {
	socket.on('gantiBaakAktifStatus', function (data) {
		request.post('http://156.67.219.174/cutiff/api/ganti_baak_aktif_status', {
			headers: {
				Authorization: data.token
			},
			form: {
				id: data.aktif_id,
				karyawan_id: data.karyawan_id,
				status: data.status,
				catatan_lebih: data.catatan,
				tunggakan: data.tunggakan
			}
		}, function (err, resp, body) {
			datas = JSON.parse(body)
			io.emit('gantiBaakAktifStatusFeedback', {
				karyawan_id: data.karyawan_id,
				npm: data.npm,
				resp: datas
			})
		})
	})
}