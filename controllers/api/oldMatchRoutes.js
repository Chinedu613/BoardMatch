const router = require("express").Router();
const { Swipe, User } = require("../../models");

router.get("/", async (req, res) => {
  const userId = req.query.userId;
  res.status(200).json(userId);
});

module.exports = router;