const router = require("express").Router();


router.get("/", (req, res) => {
  res.send("this sis amasing");
})

module.exports = router;