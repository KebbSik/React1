import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";
import { BsCalendar2DateFill } from "react-icons/bs";
import Like from "./components/Like/Like";

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
      <Button
        color="primary"
        onClick={() => console.log("Button has been clicked!")}
      >
        Click me please!
      </Button>
      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
