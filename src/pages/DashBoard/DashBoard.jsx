import { Chart } from "../../components";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./DashBoard.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashBorad = () => {
  const { incomes, expenses, userInfo } = useContext(UserContext);
  console.log(userInfo);
  const total = (money) =>
    money
      .map((item) => item.amount)
      .reduce((partialSum, amount) => partialSum + amount, 0);

  const totalExpenditure = [
    {
      title: "incomes",
      amount: total(incomes),
    },
    {
      title: "expenses",
      amount: total(expenses),
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="app__data">
        <div className="app__income-chart">
          <h1>Incomes</h1>
          <Chart money={incomes} />
        </div>
        <div className="app__expenses-chart">
          <h1>Expenses</h1>
          <Chart money={expenses} />
        </div>
      </div>
      <div className="app__expenditure">
        <h1>Total Expenditure</h1>
        <Chart money={totalExpenditure} />
        <div className="app__dashborad-info">
          <h2>Income: {totalExpenditure[0].amount}</h2>
          <h2>Expense: {totalExpenditure[1].amount}</h2>
          <h2>
            Total Save:{" "}
            {totalExpenditure[0].amount - totalExpenditure[1].amount}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DashBorad;
