import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./IncomeForm.scss";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router";

const IncomeForm = () => {
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });
  const { postIncome } = useContext(UserContext);
  const { title, amount, date, category, description } = inputState;
  const navigate = useNavigate();

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    postIncome(inputState);
    navigate(0);
  };
  return (
    <div className="app__IncomeForm">
      <h1>Income Expenditure</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Salary Title"
          onChange={handleInput("title")}
        />
        <input
          type="text"
          value={amount}
          placeholder="Amount"
          onChange={handleInput("amount")}
        />
        <DatePicker
          id="date"
          placeholderText="Enter A Date"
          selected={date}
          dateFormat={"dd/MM/yyy"}
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investiments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="youtube">Youtube</option>
          <option value="other">Other</option>
        </select>
        <textarea
          type="text"
          value={description}
          placeholder="Description"
          onChange={handleInput("description")}
          cols="30"
          rows="10"
        />

        <button>Add Income</button>
      </form>
    </div>
  );
};

export default IncomeForm;
