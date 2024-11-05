import { useState } from "react";
import "./App.css";
import produce from "immer";
import ExpandableText from "./components/ExpandableText/ExpandableText";
import Form from "./components/Form/Form";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "milk",
      amount: 5,
      category: "groceries",
    },
    {
      id: 2,
      description: "eggs",
      amount: 10,
      category: "groceries",
    },
    {
      id: 3,
      description: "electricity",
      amount: 100,
      category: "utilities",
    },
    {
      id: 4,
      description: "movies",
      amount: 15,
      category: "entertainment",
    },
    {
      id: 5,
      description: "milk",
      amount: 5,
      category: "groceries",
    },
  ]);

  return (
    <div>
      {/* <ExpenseTracker></ExpenseTracker> */}
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => {
          setExpenses(expenses.filter((e) => e.id !== id));
        }}
      ></ExpenseList>
    </div>
  );
}

export default App;
