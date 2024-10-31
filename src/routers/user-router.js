const { Router } = require("express");
const UserController = require("../controllers/user-controller");
const {
  UserValidate,
  UserValidateID,
} = require("../middlewares/user-validate");
const router = Router();

// Create
router.post("/", UserValidate, UserController.create);

// GetAll
router.get("/", UserController.getAll);

// GetOne
router.get("/:id", UserValidateID, UserController.getOne);

// Update
router.put("/:id", UserValidateID, UserController.update);

// Delete
router.delete("/:id", UserValidateID, UserController.delete);

module.exports = router;
