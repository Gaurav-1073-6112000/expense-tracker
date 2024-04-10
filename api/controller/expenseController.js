import Expense from "../model/expensesSchema.js";

const addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const newIncome = {
    title,
    amount: parseInt(amount),
    category,
    description,
    date: new Date(date),
  };

  try {
    if (!title || !category || !description || !date)
      return res.status(400).json({ message: "All fields are required!" });
    if (amount <= 0 || !amount === "number")
      return res
        .status(400)
        .json({ message: "Amount must be a positive number" });

    const result = await Expense.create(newIncome);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};

const getIncome = async (req, res) => {
  try {
    const result = await Expense.find().sort({ createdAt: -1 });
    return res.status(200).json(result);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};

const deleteIncome = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Expense.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: `${result._id} deleted from database` });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};

export default { addIncome, getIncome, deleteIncome };
