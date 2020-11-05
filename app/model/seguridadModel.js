const jwt = require("jsonwebtoken");
var cryptoJS = require("crypto-js");
const { models } = require('../../lib/sequelize');

class SeguridadModel {

	static async generateToken(datos) {
		const payload = { check: true, name: datos.name, email: datos.email };
		return jwt.sign(payload, global.tokenKey);
	}

	static async validateToken(token) {
		if (token) {
			jwt.verify(token, global.tokenKey, (error, tokenAuth) => {
				if (error) { return error; }
				else { return models["users"].findOne({ where: { token } }); }
			});
		} else { return { message: "Token no enviado" }; }

	}

	static async login(datos) {
		return await models.users.findOne({
			where: {
				email: datos.email,
				password: cryptoJS.SHA256(datos.password).toString()
			}
		});
	}

	static logout(token) {

	}
}
module.exports = SeguridadModel;