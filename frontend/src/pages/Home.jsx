import React from "react";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        color: "white",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
        padding: "2rem"
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Welcome to Marghadarshak!</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Your guide to competitions, internships, and career growth!
      </p>
      <a
        href="/dashboard"
        style={{
          background: "#ff9800",
          color: "white",
          padding: "0.8rem 1.5rem",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          transition: "all 0.2s ease-in-out"
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      >
        Go to Dashboard
      </a>
    </div>
  );
}

