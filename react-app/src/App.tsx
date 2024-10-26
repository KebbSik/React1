import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";
import { BsCalendar2DateFill } from "react-icons/bs";

function App() {
  const [alertVisible, alertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={["New York", "Los Angeles", "San Francisco"]}
        heading={"Miami"}
        onSelectItem={function (item: string): void {
          console.log(item, "clicked!");
        }}
      />
      <BsCalendar2DateFill color="red" size="40" />
    </div>
  );
}

export default App;
