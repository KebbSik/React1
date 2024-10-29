import { useState } from "react";
import "./App.css";
import produce from "immer";
import ExpandableText from "./components/ExpandableText/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText maxChars={10}>
        hello wordaasdasdsadasfasdgefhearage
      </ExpandableText>
    </div>
  );
}

export default App;
