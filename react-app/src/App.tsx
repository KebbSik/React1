import { useEffect, useRef, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import { current } from "immer/src/internal.js";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((response) => setUsers(response.data))
      .catch((err) => setError(err.message));
  }, []);
  // if (error) return <p className="text-danger">{error}</p>;

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item center" key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
