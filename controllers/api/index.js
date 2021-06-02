const router = require('express').Router();
const swipeRoutes = require("./swipeRoutes");
const userRoutes = require("./userRoutes");
const matchTransactionRoutes = require("./matchTransactionRoutes");
const oldMatchRoutes = require(".");

router.use("/users", userRoutes);
router.use("/swipes", swipeRoutes);
router.use("/matchtransactions", matchTransactionRoutes);
router.use("/oldmatches", oldMatchRoutes);

module.exports = router;