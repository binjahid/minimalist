import { useEffect } from "react";
import "./App.css";

import Home from "./pages/Home";

function App() {
  // Codes for solving responsive viewer height issue
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  });
  return (
    <main>
      <Home />
    </main>
  );
}

export default App;
