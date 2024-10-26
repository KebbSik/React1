import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const [alertVisible, alertVisibility] = useState(false);

  return (
    // <div>
    //   {alertVisible && (
    //     <Alert onClose={() => alertVisibility(false)}>
    //       <span>This is an alert shown after click the button! </span>
    //     </Alert>
    //   )}
    //   <Button color="danger" onClick={() => alertVisibility(true)}>
    //     Click me!
    //   </Button>
    // </div>
    <ListGroup
      items={["New York", "Los Angeles", "San Francisco"]}
      heading={"Miami"}
      onSelectItem={function (item: string): void {
        console.log(item, "clicked!");
      }}
    />
  );
}

export default App;
