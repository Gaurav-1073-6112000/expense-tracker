import "./Income.scss";
import { IncomeForm, GetIncome } from "../../components";

const Income = () => {
  return (
    <div className="app__income">
      <IncomeForm />
      <GetIncome />
    </div>
  );
};

export default Income;
