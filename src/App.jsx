import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import PRoutes from "./PRoutes";

function App() {
  return (
    <Router>
      <Header />
      <div style={{ marginTop: "80px", padding: "20px" }}>
        <PRoutes />
      </div>
    </Router>
  );
}

export default App;
