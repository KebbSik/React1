import { useEffect, useRef, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import { current } from "immer/src/internal.js";

const connect = () => {
  console.log("Connetcing");
};

const disconnect = () => {
  console.log("Disconnecting");
};

function App() {
  useEffect(() => {
    document.title = "My App";
    connect();

    return () => disconnect();
  });
  return <div></div>;
}

export default App;
