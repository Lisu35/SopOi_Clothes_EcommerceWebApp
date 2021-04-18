const express = require("express");

module.exports = ({ productController, authentication }) => {
  const router = express.Router();
  router.post(
    "/product/:condition/",
    authentication.verify,
    productController.getProducts
  );
  router.post(
    "/category",
    authentication.verify,
    productController.getAllCategories
  );
  router.post("/check", authentication.verify);
  router.post("/stock", authentication.verify, productController.getStock);
  return router;
};
