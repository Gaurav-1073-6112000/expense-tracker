import { Router } from "express";
import authController from "../controller/authController.js";
const router = Router();

router.route("/").post(authController.authUser);
router
  .route("/score")
  .get(authController.getScore)
  .put(authController.updateScore);

export default router;
