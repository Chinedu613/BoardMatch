const router = require("express").Router();
const { Swipe, User } = require("../../models");

router.get("/", async (req, res) => {
    // find all swipes
    try {
      const allSwipes = await Swipe.findAll({
        include: [{model: User}],
      });
      res.status(200).json(allSwipes);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get("/:id", async (req, res) => {
    // find one swipe by `id` value
    try {
      const swipe = await Swipe.findByPk(req.params.id, {
          include: [{model: User}]
      });
      if (!swipe) {
          res.status(404).json({message: "no swipes with the specified id exist in the database"});
          return;
      }
      res.status(200).json(swipe);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;