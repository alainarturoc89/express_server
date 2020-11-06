const jwt = require("jsonwebtoken");
const { models } = require('../lib/sequelize');

module.exports = function authentication(req, _res, next) {
    const token = req.headers['authentication-token'];
    if (token) {
        jwt.verify(token, global.tokenKey, (error, tokenAuth) => {
            if (error) {
                _res.status(403).json({ message: "Token invalido" });
            } else {
                req.user = models["users"].findOne({ where: { token } });
                next();
            }
        });
    } else {
        _res.status(403).json({ message: "Token no enviado" });
    }
}