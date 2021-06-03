const router = require("express").Router();
const { Swipe, User } = require("../../models");

router.get("/", async (req, res) => {  
  try {
    let userId = req.query.userId;
    res.status(200).json(userId);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post("/", async (req, res) => {  
  try {
    const matchAccepted = req.query.matchAccepted;
    res.status(200).json(matchAccepted);
  }  catch {
    res.status(500).json(err);
  }
});

module.exports = router;