import { useState } from "react";
import "./App.css";

function App() {
  const [isVisible, setVisiblity] = useState(false);
  let count = 0;
  const [isApproved, setApproved] = useState(true);

  const handleClick = () => {
    setVisiblity(true);
    count++;
    console.log(isVisible, count);
  };
  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

export default App;
