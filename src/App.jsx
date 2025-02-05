import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";
import "./App.css";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<ComingSoon />} />
        <Route path="/services" element={<ComingSoon />} />
        <Route path="/contact" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}
