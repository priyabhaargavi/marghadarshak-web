import React, { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function AiRoadmap() {
  const [interest, setInterest] = useState("");
  const [roadmap, setRoadmap] = useState([]);
  const [audience, setAudience] = useState("17plus");
  const [completed, setCompleted] = useState([]);

  const roadmaps = {
    under17: {
      "ai engineer": [
        { step: "Learn Math & Logic", level: 1 },
        { step: "Basics of Python", level: 2 },
        { step: "Mini Projects (AI Games)", level: 3 },
        { step: "Intro to Machine Learning", level: 4 },
        { step: "Participate in School AI Competitions", level: 5 },
      ],
      "web developer": [
        { step: "HTML & CSS Basics", level: 1 },
        { step: "JavaScript Fundamentals", level: 2 },
        { step: "Build Mini Websites", level: 3 },
        { step: "Learn React Basics", level: 4 },
        { step: "School Coding Competitions", level: 5 },
      ],
    },
    "17plus": {
      "ai engineer": [
        { step: "Math & Python Mastery", level: 1 },
        { step: "Machine Learning Models", level: 2 },
        { step: "Deep Learning (CNN, RNN, NLP)", level: 3 },
        { step: "AI Projects & Research Papers", level: 4 },
        { step: "MLOps & Industry Internships", level: 5 },
      ],
      cybersecurity: [
        { step: "Networking & Linux", level: 1 },
        { step: "Cryptography Basics", level: 2 },
        { step: "Ethical Hacking Labs", level: 3 },
        { step: "CTFs & Bug Bounty Programs", level: 4 },
        { step: "Cybersecurity Certifications", level: 5 },
      ],
      "data science": [
        { step: "Statistics & Python", level: 1 },
        { step: "Data Visualization", level: 2 },
        { step: "Machine Learning Models", level: 3 },
        { step: "Big Data & Cloud Tools", level: 4 },
        { step: "Industry Projects", level: 5 },
      ],
    },
  };

  const handleGenerate = () => {
    const key = interest.toLowerCase();
    if (roadmaps[audience][key]) {
      setRoadmap(roadmaps[audience][key]);
      setCompleted(new Array(roadmaps[audience][key].length).fill(false));
    } else {
      alert("❌ Roadmap not available for this interest yet!");
      setRoadmap([]);
      setCompleted([]);
    }
  };

  const toggleCompleted = (index) => {
    const newCompleted = [...completed];
    newCompleted[index] = !newCompleted[index];
    setCompleted(newCompleted);
  };

  const progress = roadmap.length
    ? Math.round((completed.filter((c) => c).length / roadmap.length) * 100)
    : 0;

  return (
    <div
      style={{
        minHeight: "100vh", // ✅ full screen height
        width: "100vw", // ✅ full screen width
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        color: "#fff",
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: "20px",
          textAlign: "center",
          background: "rgba(0,0,0,0.4)",
        }}
      >
        <h1 style={{ fontSize: "2rem", color: "#4fd1c5" }}>
          🚀 AI Career Roadmap Planner
        </h1>
      </header>

      {/* Main content */}
      <main
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
          width: "100%",
        }}
      >
        {/* Audience Selector */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <label style={{ marginRight: "10px", fontWeight: "bold" }}>
            Choose Age Group:
          </label>
          <select
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              fontSize: "16px",
              background: "#1e293b",
              color: "#fff",
              border: "2px solid #4fd1c5",
            }}
          >
            <option value="under17">13–17 (Students)</option>
            <option value="17plus">18+ (College/Professionals)</option>
          </select>
        </div>

        {/* Interest Input */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <input
            type="text"
            list="suggestions"
            placeholder="Eg: AI Engineer, Web Developer, Cybersecurity..."
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            style={{
              padding: "12px",
              fontSize: "16px",
              width: "60%",
              borderRadius: "10px",
              border: "2px solid #4fd1c5",
              marginRight: "10px",
              background: "#1e293b",
              color: "#fff",
            }}
          />
          <datalist id="suggestions">
            <option value="AI Engineer" />
            <option value="Web Developer" />
            <option value="Cybersecurity" />
            <option value="Data Science" />
          </datalist>
          <button
            onClick={handleGenerate}
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              backgroundColor: "#4fd1c5",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Generate Roadmap
          </button>
        </div>

        {/* Roadmap Section */}
        {roadmap.length > 0 && (
          <section style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2
              style={{
                textAlign: "center",
                marginBottom: "20px",
                color: "#f1f1f1",
              }}
            >
              Roadmap for {interest} (
              {audience === "under17" ? "Student" : "Professional"})
            </h2>

            {/* Chart */}
            <div
              style={{
                background: "#1e293b",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "30px",
              }}
            >
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={roadmap}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                  <XAxis dataKey="step" stroke="#fff" />
                  <YAxis domain={[0, 6]} stroke="#fff" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="level"
                    stroke="#4fd1c5"
                    strokeWidth={3}
                    dot={{ r: 5, fill: "#4fd1c5" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Roadmap Steps */}
            <div
              style={{
                marginTop: "20px",
                padding: "20px",
                background: "#1e293b",
                borderRadius: "12px",
              }}
            >
              <h3 style={{ color: "#4fd1c5", marginBottom: "15px" }}>
                📌 Step-by-Step Roadmap
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "15px",
                }}
              >
                {roadmap.map((r, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "15px",
                      borderRadius: "10px",
                      background: completed[idx] ? "#065f46" : "#334155",
                      transition: "0.3s",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleCompleted(idx)}
                  >
                    <input
                      type="checkbox"
                      checked={completed[idx]}
                      readOnly
                      style={{ marginRight: "10px" }}
                    />
                    <strong>Step {idx + 1}:</strong> {r.step}
                  </div>
                ))}
              </div>

              {/* Progress */}
              <div style={{ marginTop: "25px" }}>
                <p>✅ Progress: {progress}%</p>
                <div
                  style={{
                    background: "#475569",
                    borderRadius: "10px",
                    overflow: "hidden",
                    height: "20px",
                  }}
                >
                  <div
                    style={{
                      width: `${progress}%`,
                      height: "100%",
                      background:
                        progress === 100
                          ? "linear-gradient(to right, #16a34a, #22c55e)"
                          : "linear-gradient(to right, #2563eb, #4fd1c5)",
                      transition: "width 0.5s ease-in-out",
                    }}
                  />
                </div>
              </div>

              {/* Achievements */}
              {progress >= 50 && progress < 100 && (
                <p style={{ marginTop: "15px", color: "#facc15" }}>
                  🏅 You unlocked the Halfway Badge – keep going!
                </p>
              )}
              {progress === 100 && (
                <p
                  style={{
                    marginTop: "15px",
                    color: "limegreen",
                    fontWeight: "bold",
                  }}
                >
                  🎉 Congratulations! You completed the roadmap!
                </p>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
