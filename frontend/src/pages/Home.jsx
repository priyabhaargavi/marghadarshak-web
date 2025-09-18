import React from "react";

export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        color: "white",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "3.5rem",
          marginBottom: "1rem",
          fontWeight: "bold",
          textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        🎓 Welcome to Marghadarshak
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "1.3rem",
          marginBottom: "2rem",
          maxWidth: "700px",
          lineHeight: "1.6",
          textShadow: "1px 1px 6px rgba(0,0,0,0.3)",
        }}
      >
        Your ultimate guide to{" "}
        <strong>Competitions, Internships, and Career Growth</strong>.  
        Learn, explore, and unlock your potential with the right resources at the right time.
      </p>

      {/* Call to Action */}
      <a
        href="/dashboard"
        style={{
          background: "#ff9800",
          color: "white",
          padding: "1rem 2rem",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.2rem",
          boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease-in-out",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "scale(1.08)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
        🚀 Go to Dashboard
      </a>

      {/* Footer */}
      <footer
        style={{
          position: "absolute",
          bottom: "20px",
          fontSize: "0.9rem",
          opacity: 0.8,
        }}
      >
        Empowering Students • Building Futures
      </footer>
    </div>
  );
}
