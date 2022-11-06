const router = require("express").Router();
const listRoutes = require("./listRoutes");
const userRoutes = require("./user-routes.js");

router.use("/lists", listRoutes);
router.use("/user", userRoutes);

module.exports = router;
