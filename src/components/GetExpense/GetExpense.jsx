import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";

import { FaMoneyCheckAlt } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";
import "./GetIncome.scss";

const GetExpense = () => {
  const { getAllExpense, expenses } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      await getAllExpense();
    };

    fetchData();
  }, []);

  return (
    <div className="app__getIncome">
      <div className="app__getIncome-container">
        <h1>
          Total Expense{" "}
          <span>
            <FaMoneyCheckAlt />
          </span>
        </h1>
        <ul>
          {expenses.map((item, index) => (
            <li key={index}>
              <span>{item.title}</span>
              <span>{item.amount}</span>
              <CiTrash />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GetExpense;
