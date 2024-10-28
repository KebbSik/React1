import { useState } from "react";
import "./App.css";
import produce from "immer";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    // simple way to update an obect with 'immer' library
    // remember that, we have to install this library in the project at first
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {/* {bugs.map((bug) => bug.title.toString() + bug.fixed.toString() + " ")} */}
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}

      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
