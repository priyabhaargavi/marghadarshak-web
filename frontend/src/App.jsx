import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Competitions from "./pages/Competitions";
import Internships from "./pages/Internships";
import Resources from "./pages/Resources"; // ✅ new page
import AiRoadmap from "./pages/AiRoadmap";


function App() {
  return (
    <div>
      {/* Navbar */}
      <nav style={{ padding: "1rem", background: "#222" }}>
        <Link to="/" style={{ color: "white", marginRight: "1rem" }}>Home</Link>
        <Link to="/dashboard" style={{ color: "white", marginRight: "1rem" }}>Dashboard</Link>
        <Link to="/competitions" style={{ color: "white", marginRight: "1rem" }}>Competitions</Link>
        <Link to="/internships" style={{ color: "white", marginRight: "1rem" }}>Internships</Link>
        <Link to="/resources" style={{ color: "white" }}>Resources</Link> {/* ✅ new link */}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/resources" element={<Resources />} /> {/* ✅ new route */}
        <Route path="/ai-roadmap" element={<AiRoadmap />} />
      </Routes>
    </div>
  );
}

export default App;
