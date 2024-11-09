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

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data));
  }, []);
  return (
    <div>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item " key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
