import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AiRoadmap() {
  const steps = [
    { title: "1. Learn Basics", desc: "Python, Math, Stats" },
    { title: "2. Data Handling", desc: "Numpy, Pandas, Viz" },
    { title: "3. Machine Learning", desc: "Regression, Classification" },
    { title: "4. Deep Learning", desc: "Neural Nets, CNN, RNN" },
    { title: "5. Specialization", desc: "NLP, CV, RL, Generative AI" },
    { title: "6. Projects & Portfolio", desc: "GitHub, Kaggle, Real Projects" },
    { title: "7. Career Prep", desc: "Internships, Resume, Interviews" },
  ];

  // Data for visualization
  const chartData = steps.map((step, i) => ({
    name: step.title,
    progress: (i + 1) * 10, // progress value (just for demo)
  }));

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        color: "white",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "2rem",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "2rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        🚀 AI Learning Roadmap
      </h1>

      {/* Visualization Section */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "300px",
          marginBottom: "50px",
          background: "rgba(255,255,255,0.1)",
          padding: "1rem",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          📊 Roadmap Progress Visualization
        </h2>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Line type="monotone" dataKey="progress" stroke="#ffeb3b" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Text Roadmap */}
      <div style={{ width: "100%", maxWidth: "800px" }}>
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "30px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <h2 style={{ color: "#ffeb3b", marginBottom: "10px" }}>{step.title}</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>{step.desc}</p>

            {/* Arrow */}
            {index < steps.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "2rem",
                  color: "#fff",
                }}
              >
                ↓
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "2rem",
          fontSize: "1rem",
          opacity: 0.8,
        }}
      >
        Keep Learning • Keep Building • Keep Growing
      </footer>
    </div>
  );
}
