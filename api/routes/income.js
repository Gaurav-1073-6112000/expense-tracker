import Router from "express";
import incomeController from "../controller/incomeController.js";

const router = Router();

router
  .route("/")
  .get(incomeController.getIncome)
  .post(incomeController.addIncome);
router.delete("/:id", incomeController.deleteIncome);

export default router;
