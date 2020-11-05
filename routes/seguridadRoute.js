var express = require(`express`);
var router = express.Router();

const seguridadController = require("../app/controllers/seguridadController");
router.post("/login", seguridadController.login);
router.post("/logout", seguridadController.validateToken, seguridadController.logout);

module.exports = router;
