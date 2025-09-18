import React, { useEffect, useState } from "react";
import api from "../api";

export default function Competitions() {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await api.get("/competitions");
      setCompetitions(res.data.competitions);
    }
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Competitions & Hackathons</h2>
      {competitions.map((c) => (
        <div className="card mb-2 p-3" key={c.id}>
          <h5>{c.title}</h5>
          <p>{c.description}</p>
        </div>
      ))}
    </div>
  );
}
