import { useState } from "react";
import "./App.css";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div>
      {bugs.map((bug) => bug.title.toString() + bug.fixed.toString() + " ")}

      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
