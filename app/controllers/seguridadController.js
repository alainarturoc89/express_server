
const SeguridadModel = require("../model/seguridadModel");

class SeguridadController {

	static generateToken(datos) {
		SeguridadModel
			.generateToken(datos)
			.then(token => { return token })
			.catch(error => { return error });
	}

	static validateToken(datos, next) {
		SeguridadModel
			.validateToken(datos)
			.then(userToken => {
				if (userToken.length === 0) { return { message: "No existe usuario con ese token" } }
				else { next(); }
			})
			.catch(error => { return error });
	}

	static login(req, res) {
		const { email, pass } = req.body;
		if (!email || !pass) { return res.status(500).send("No hay usuario o contraseña"); }
		SeguridadModel
			.login({ email, password: pass })
			.then(user => { res.json({ user }); })
			.catch(error => { console.log(error); return error });
	}

	static logout(req, res) {
		SeguridadModel
			.logout(req.body.token)
			.then(user => { res.json({ user }); })
			.catch(error => { return error });
	}

}

module.exports = SeguridadController;