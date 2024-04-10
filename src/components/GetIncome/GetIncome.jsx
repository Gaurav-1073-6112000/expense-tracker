import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";

import { FaMoneyCheckAlt } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";
import "./GetIncome.scss";

const GetIncome = () => {
  const { getAllIncome, incomes } = useContext(UserContext);
  console.log(incomes);
  useEffect(() => {
    const fetchData = async () => {
      await getAllIncome();
    };

    fetchData();
  }, []);

  return (
    <div className="app__getIncome">
      <div className="app__getIncome-container">
        <h1>
          Total Income{" "}
          <span>
            <FaMoneyCheckAlt />
          </span>
        </h1>
        <ul>
          {incomes.map((item, index) => (
            <li key={index}>
              <span>{item.title}</span>
              <span>{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GetIncome;
