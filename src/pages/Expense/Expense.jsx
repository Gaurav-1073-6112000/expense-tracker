import "./Expense.scss";
import {
  IncomeForm,
  GetIncome,
  ExpenseForm,
  GetExpense,
} from "../../components";

const Income = () => {
  return (
    <div className="app__income">
      <ExpenseForm />
      <GetExpense />
    </div>
  );
};

export default Income;
