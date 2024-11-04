import { useState } from "react";
import "./App.css";
import produce from "immer";
import ExpandableText from "./components/ExpandableText/ExpandableText";
import Form from "./components/Form/Form";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
function App() {
  return (
    <div>
      <ExpenseTracker></ExpenseTracker>
    </div>
  );
}

export default App;
