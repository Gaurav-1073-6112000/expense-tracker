import Router from "express";
import expenseController from "../controller/expenseController.js";

const router = Router();

router
  .route("/")
  .get(expenseController.getIncome)
  .post(expenseController.addIncome);
router.delete("/:id", expenseController.deleteIncome);

export default router;
