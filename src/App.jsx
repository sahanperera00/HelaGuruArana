import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/about" element={<ComingSoon />} />
        <Route path="/services" element={<ComingSoon />} />
        <Route path="/contact" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}
