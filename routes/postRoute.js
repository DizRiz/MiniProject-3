var express = require("express");
var router = express.Router();
var Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.postController.getPost(res);
});

router.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});

router.put("/update/:id", (req, res) => {
  Controllers.postController.updatePost(req, res);
});


router.delete("/delete/:id", (req, res) => {
  Controllers.postController.deletePost(req, res);
});


module.exports = router;
