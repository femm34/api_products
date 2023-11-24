const express = require("express");

const router = express.Router();

const productsContoller = require("../controllers/productController");

router
  .get("/", productsContoller.get)
  .get("/:id", productsContoller.getById)
  .post("/", productsContoller.create)
  .put("/:id", productsContoller.update)
  .delete("/:id", productsContoller._delete);

module.exports = router;
