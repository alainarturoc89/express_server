var express = require(`express`);
var router = express.Router();

const authorization = require("../middleware/authorization");

const seguridadController = require("../app/controllers/seguridadController");
router.post("/login", seguridadController.login);
router.post("/logout", authorization, seguridadController.logout);

module.exports = router;
