import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  // after render
  useEffect(() => {
    // side effect
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App;
