// ROUTING
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// STYLING
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENTS
import Header from "./components/nav/Header";
import Home from "./pages/Home";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
