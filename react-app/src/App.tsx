import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setfirstName] = useState("Kevin");
  // const [lastName, setlastName] = useState("Sarfo");
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setPerson({
      firstName: "Kevin",
      lastName: "Sarfo",
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Change Data</button>
      {person.firstName} {person.lastName}
    </div>
  );
}

export default App;
