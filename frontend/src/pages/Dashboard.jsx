import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Dashboard() {
  const [opps, setOpps] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/opportunities')
      .then(res => setOpps(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {opps.map(o => (
          <li key={o.id}>{o.title} — {o.type}</li>
        ))}
      </ul>
    </div>
  )
}
