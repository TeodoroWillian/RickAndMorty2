const router = require("express").Router();
const userController = require("./users.controller");


router.post("/",userController.createUsercontroller);
router.get("/", userController.findAllUsercontroller);

module.exports = router;