import { useState } from "react";
import "./App.css";
import produce from "immer";
import ExpandableText from "./components/ExpandableText/ExpandableText";
import Form from "./components/Form/Form";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";

export const categories = ["Groceries", "Utilities", "Entertainment"];

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

  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredExpenses = selectedCategory
    ? expenses.filter(
        (e) =>
          e.category.toLocaleLowerCase() ===
          selectedCategory.toLocaleLowerCase()
      )
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(selectedCategory) =>
            setSelectedCategory(selectedCategory)
          }
        />
      </div>
      {/* <ExpenseTracker></ExpenseTracker> */}
      <ExpenseList
        expenses={filteredExpenses}
        onDelete={(id) => {
          setExpenses(expenses.filter((e) => e.id !== id));
        }}
      ></ExpenseList>
    </div>
  );
}

export default App;
