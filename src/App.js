import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  function changeTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }
  return (
    <>
      <NavBar theme={theme} changeTheme={changeTheme} />
      <HomePage theme={theme} />
    </>
  );
}

export default App;
