// src/App.js
import React, { useState } from "react";
import Login from "./pages/Login";
import Students from "./pages/Students";

function App() {
  const [token, setToken] = useState("");

  return (
    <div>
      <Login />
      <Students />
    </div>
  );
}

export default App;
