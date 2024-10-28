import { useState } from "react";
import "./App.css";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  return (
    <div>
      {customer.address.zipCode}
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
