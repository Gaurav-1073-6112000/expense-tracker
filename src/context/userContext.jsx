import { createContext, useState, useEffect } from "react";

import { api } from "./../config/api";

export const UserContext = createContext({});

const seedData = [
  {
    _id: "66032c8fb502562ea4a34ee9",
    title: "new expense",
    amount: 456,
    type: "income",
    date: "2024-11-02T18:30:00.000Z",
    category: "freelancing",
    description: "fedfe",
    createdAt: "2024-03-26T20:14:07.330Z",
    updatedAt: "2024-03-26T20:14:07.330Z",
    __v: 0,
  },
  {
    _id: "66032bdcb502562ea4a34ee3",
    title: "hackthon",
    amount: 355,
    type: "income",
    date: "2024-03-25T18:30:00.000Z",
    category: "freelancing",
    description: "Won HackThon",
    createdAt: "2024-03-26T20:11:08.181Z",
    updatedAt: "2024-03-26T20:11:08.181Z",
    __v: 0,
  },
  {
    _id: "660322f18d041e8a8c7ca752",
    title: "Salary",
    amount: 200,
    type: "income",
    date: "2024-04-02T18:30:00.000Z",
    category: "freelancing",
    description: "free",
    createdAt: "2024-03-26T19:33:05.930Z",
    updatedAt: "2024-03-26T19:33:05.930Z",
    __v: 0,
  },
  {
    _id: "660322c2ed04d52403ac4155",
    title: "Salary",
    amount: 200,
    type: "income",
    date: "2024-04-02T18:30:00.000Z",
    category: "freelancing",
    description: "free",
    createdAt: "2024-03-26T19:32:18.720Z",
    updatedAt: "2024-03-26T19:32:18.720Z",
    __v: 0,
  },
  {
    _id: "66031543e0fa71694ff608f9",
    title: "Salary",
    amount: 200,
    type: "income",
    date: "2024-03-26T12:00:00.000Z",
    category: "income",
    description: "montly salary",
    createdAt: "2024-03-26T18:34:43.934Z",
    updatedAt: "2024-03-26T18:34:43.934Z",
    __v: 0,
  },
];

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [incomes, setIncomes] = useState([...seedData]);
  const [totalScore, setTotalScore] = useState(20);
  const [expenses, setExpenses] = useState([...seedData]);
  console.log(userInfo);

  const postIncome = async (income) => {
    try {
      const response = await api.post("/api/v1/income", income);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllIncome = async () => {
    try {
      const response = await api("/api/v1/income");

      if (response.status === 200) {
        setIncomes(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const postExpense = async (income) => {
    try {
      const response = await api.post("/api/v1/expense", income);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllExpense = async () => {
    try {
      const response = await api("/api/v1/expense");

      if (response.status === 200) {
        setExpenses(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        postIncome,
        getAllIncome,
        incomes,
        postExpense,
        getAllExpense,
        expenses,
        setExpenses,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
