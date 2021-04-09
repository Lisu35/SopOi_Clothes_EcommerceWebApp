const express = require("express");
const cors = require("cors");

module.exports = ({
  userRouter,
  authentication,
  authRouter,
  productRouter,
}) => {
  const router = express.Router();
  router.use(cors({ exposedHeaders: "auth-token" }));
  router.use(express.json());
  router.use(express.urlencoded({ extended: true }));
  router.use("/auth", authRouter);
  router.use("/", userRouter);
  router.use("/", productRouter);
  router.use("/", authentication.verify);
  return router;
};
