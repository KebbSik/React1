import { useState } from "react";
import "./App.css";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    // Add
    // setTags([...tags, "exciting"]);

    //Remove
    // setTags(tags.filter((tag) => tag !== "happy"));

    //Update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  return (
    <div>
      {tags + " "}
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
