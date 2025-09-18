const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const db = require('./db');   

const app = express();
app.use(cors());
app.use(express.json());
const API_PREFIX = '/api';

//auth----

//for registrr
app.post(`${API_PREFIX}/auth/register`, async (req, res) => {
  const { username, password, age_group } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'username & password required' });
  }
  const hashed = await bcrypt.hash(password, 8);
  try {
    const stmt = db.prepare('INSERT INTO users (username, password, age_group) VALUES (?, ?, ?)');
    const info = stmt.run(username, hashed, age_group || 'school');
    const user = { id: info.lastInsertRowid, username, age_group };
    res.json({ user });
  } catch (e) {
    res.status(400).json({ error: 'username exists' });
  }
});

//forlogin
app.post(`${API_PREFIX}/auth/login`, async (req, res) => {
  const { username, password } = req.body;
  const row = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
  if (!row) return res.status(400).json({ error: 'invalid credentials' });

  const ok = await bcrypt.compare(password, row.password);
  if (!ok) return res.status(400).json({ error: 'invalid credentials' });

  res.json({ user: { id: row.id, username: row.username, age_group: row.age_group, interests: row.interests } });
});

//forprofile

app.get(`${API_PREFIX}/profile/:id`, (req, res) => {
  const id = req.params.id;
  const user = db.prepare('SELECT id, username, age_group, interests FROM users WHERE id = ?').get(id);
  if (!user) return res.status(404).json({ error: 'user not found' });
  res.json({ user });
});

app.post(`${API_PREFIX}/profile/:id`, (req, res) => {
  const id = req.params.id;
  const { interests, age_group } = req.body;
  db.prepare('UPDATE users SET interests = ?, age_group = ? WHERE id = ?').run(interests || '', age_group || '', id);
  const user = db.prepare('SELECT id, username, age_group, interests FROM users WHERE id = ?').get(id);
  res.json({ user });
});

// forcareer roadmap

app.get(`${API_PREFIX}/career/roadmap`, (req, res) => {
  const roadmap = [
    { step: 'Learn Basics', desc: 'Start with fundamentals & small projects' },
    { step: 'Practice', desc: 'Build projects, solve problems' },
    { step: 'Internships', desc: 'Apply to internships & open-source' },
    { step: 'Jobs', desc: 'Prepare interviews & apply' },
  ];
  res.json({ roadmap });
});

//for comp
app.get(`${API_PREFIX}/competitions`, (req, res) => {
  const rows = db.prepare('SELECT * FROM competitions').all();
  res.json({ competitions: rows });
});

//for intern
app.get(`${API_PREFIX}/internships`, (req, res) => {
  const rows = db.prepare('SELECT * FROM internships').all();
  res.json({ internships: rows });
});

//(13-17)
app.get(`${API_PREFIX}/school/features`, (req, res) => {
  res.json({
    features: [
      { key: 'homework', title: 'Homework Help', desc: 'Short hints & links' },
      { key: 'games', title: 'Educational Games', desc: 'Coding puzzles & quizzes' },
      { key: 'resources', title: 'Learning Resources', desc: 'Topic-based reading lists' },
      { key: 'challenges', title: 'Mini Challenges', desc: 'Weekly small tasks' },
    ]
  });
});

//17+

app.get(`${API_PREFIX}/college/features`, (req, res) => {
  res.json({
    features: [
      { key: 'internships', title: 'Internships', desc: 'Apply to internships' },
      { key: 'competitions', title: 'Competitions', desc: 'Hackathons & contests' },
      { key: 'mentorship', title: 'Mentorship', desc: 'Find a mentor' },
      { key: 'upskilling', title: 'Upskilling', desc: 'Courses & certifications' },
    ]
  });
});

app.get(`${API_PREFIX}/opportunities`, (req, res) => {
  // Combine competitions and internships if you want
  const competitions = db.prepare('SELECT * FROM competitions').all();
  const internships = db.prepare('SELECT * FROM internships').all();

  // Send as a single list
  const opportunities = [
    ...competitions.map(c => ({ id: c.id, title: c.title, type: 'Competition' })),
    ...internships.map(i => ({ id: i.id, title: i.title, type: 'Internship' }))
  ];

  res.json(opportunities);
});

//start server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('API listening on', PORT));

