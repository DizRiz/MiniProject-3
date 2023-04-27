const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

router.post("/create", (req, res) => {
  Controllers.userController.createUsers(req.body, res);
});

router.put("/update/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

router.delete("/delete/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;