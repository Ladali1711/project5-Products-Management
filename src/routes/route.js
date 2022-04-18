const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const middleware = require("../middleware/auth");
const productController = require("../controller/productController");

router.post("/register", userController.createUser);

router.post("/login", userController.userLogin);

router.get(
  "/user/:userId/profile",
  middleware.authenticate,
  middleware.authorise,
  userController.getUserById
);

router.put(
  "/user/:userId/profile",
  middleware.authenticate,
  middleware.authorise,
  userController.updateUser
);
//***************product apis*************************************************************

router.post("/products", productController.createProduct);
router.get("/products",productController.getProduct)
router.get("/products/:productId",productController.getProductById)
router.put("/products/:productId",productController.updateProduct)
router.delete("/products/:productId",productController.deleteProduct)

module.exports = router;
