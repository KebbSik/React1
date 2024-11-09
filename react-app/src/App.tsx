import { useEffect, useRef, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import { current } from "immer/src/internal.js";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    // .finally(() => setLoading(false)); //better aproach but does't work at strict mode

    return () => {
      controller.abort();
    };
  }, []);

  function deleteUser(user: User) {
    const originalUsers = [...users];
    setUsers(users.filter((item) => item.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id) //to simulate an error make link wrong
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  }

  function addUser() {
    const originalUsers = [...users];
    const newUser = {
      id: 99,
      name: "Naruto Uzumaki",
    };
    setUsers([...users, newUser]);

    axios
      //to simulate en error, change link to wrong
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then(({ data: savedUser }) => setUsers([...users, savedUser]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  }

  function updateUser(user: User) {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    axios
      //to simulate en error, change link to wrong
      .patch(
        "https://jsonplaceholder.typicode.com/users/" + user.id,
        updatedUser
      )
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  }

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {/* To see the loader for longer we shold change throttling  to low connection (for example 3G), in browsers webDevTool > Network  */}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Edit
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
