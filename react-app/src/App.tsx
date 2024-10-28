import { useState } from "react";
import "./App.css";
import produce from "immer";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartItems, setCartItems] = useState([
    "Product 1",
    "Product 2",
    "Producet 3",
  ]);

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>
    </div>
  );
}

export default App;
