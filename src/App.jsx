import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import PRoutes from "./PRoutes";

function App() {
  return (
    <Router basename="/myresume">
      <Header />
      <div style={{ marginTop: "80px", padding: "20px" }}>
        <PRoutes />
      </div>
    </Router>
  );
}

export default App;
