import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [age, setAge] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  const handleAgeSubmit = () => {
    const ageNum = parseInt(age);
    if (ageNum >= 13 && ageNum <= 16) {
      setAgeGroup('under17');
      setShowContent(true);
    } else if (ageNum >= 17) {
      setAgeGroup('17plus');
      setShowContent(true);
    } else {
      alert('Please enter a valid age (13+ years)');
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Full-screen blue background style
  const fullScreenBlueBackground = {
    minHeight: '100vh',
    width: '100vw',
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    position: 'fixed',
    top: '0',
    left: '0',
    overflow: 'auto',
    padding: '0',
    margin: '0',
    boxSizing: 'border-box',
    zIndex: 9999
  };

  const fullScreenContainer = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: showContent ? 'flex-start' : 'center',
    padding: showContent ? '20px' : '40px 20px',
    boxSizing: 'border-box'
  };

  // Age selection screen
  if (!showContent) {
    return (
      <div style={fullScreenBlueBackground}>
        <div style={fullScreenContainer}>
          <div style={{
            padding: '40px',
            maxWidth: '600px',
            width: '100%',
            textAlign: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
          }}>
            <h1 style={{
              color: '#1e3c72',
              marginBottom: '20px',
              fontSize: '2.5rem'
            }}>
              Welcome to Your Dashboard! 🚀
            </h1>
            <p style={{
              color: '#555',
              fontSize: '1.2rem',
              marginBottom: '30px'
            }}>
              Please enter your age to get personalized recommendations
            </p>

            <div style={{ marginBottom: '30px' }}>
              <input
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min="13"
                max="100"
                style={{
                  padding: '15px 20px',
                  fontSize: '18px',
                  border: '2px solid #3498db',
                  borderRadius: '8px',
                  marginRight: '15px',
                  width: '200px',
                  textAlign: 'center'
                }}
              />
              <button
                onClick={handleAgeSubmit}
                style={{
                  padding: '15px 30px',
                  fontSize: '18px',
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
              >
                Continue
              </button>
            </div>

            <p style={{
              color: '#95a5a6',
              fontSize: '14px'
            }}>
              Age verification helps us provide age-appropriate content and opportunities
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard for students under 17 (13-16 years)
  if (ageGroup === 'under17') {
    return (
      <div style={fullScreenBlueBackground}>
        <div style={fullScreenContainer}>
          <div style={{
            textAlign: 'center',
            marginBottom: '40px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '20px',
            borderRadius: '10px',
            width: '100%',
            maxWidth: '1200px'
          }}>
            <h1 style={{ color: '#27ae60', marginBottom: '10px' }}>
              Student Dashboard (Age: {age}) 📚
            </h1>
            <p style={{ color: '#2c3e50', fontSize: '1.1rem' }}>
              Perfect! Here are learning resources and opportunities designed just for you!
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            width: '100%',
            maxWidth: '1200px'
          }}>
            {/* Homework Help */}
            <div style={{
              backgroundColor: '#fff3cd',
              padding: '25px',
              borderRadius: '12px',
              border: '2px solid #ffeaa7',
              boxShadow: '0 3px 6px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#856404', marginBottom: '15px' }}>📝 Homework Help</h3>
              <p style={{ color: '#533f03', marginBottom: '20px' }}>
                Get help with your school assignments and projects
              </p>
              <a href="https://www.khanacademy.org/" target="_blank" rel="noopener noreferrer"
                 style={{
                   display: 'inline-block',
                   padding: '12px 24px',
                   backgroundColor: '#f39c12',
                   color: 'white',
                   textDecoration: 'none',
                   borderRadius: '6px',
                   marginRight: '10px',
                   marginBottom: '10px'
                 }}>
                Khan Academy
              </a>
              <a href="https://www.chegg.com/study" target="_blank" rel="noopener noreferrer"
                 style={{
                   display: 'inline-block',
                   padding: '12px 24px',
                   backgroundColor: '#e67e22',
                   color: 'white',
                   textDecoration: 'none',
                   borderRadius: '6px',
                   marginBottom: '10px'
                 }}>
                Chegg Study Help
              </a>
            </div>

            {/* Learning Resources */}
            <div style={{
              backgroundColor: '#d1ecf1',
              padding: '25px',
              borderRadius: '12px',
              border: '2px solid #bee5eb',
              boxShadow: '0 3px 6px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#0c5460', marginBottom: '15px' }}>🎓 Learning Resources</h3>
              <p style={{ color: '#055160', marginBottom: '20px' }}>
                Free courses and tutorials to expand your knowledge
              </p>
              <a href="https://www.coursera.org/courses?query=high%20school" target="_blank" rel="noopener noreferrer"
                 style={{
                   display: 'inline-block',
                   padding: '12px 24px',
                   backgroundColor: '#17a2b8',
                   color: 'white',
                   textDecoration: 'none',
                   borderRadius: '6px',
                   marginRight: '10px',
                   marginBottom: '10px'
                 }}>
                Coursera
              </a>
              <a href="https://www.edx.org/high-school" target="_blank" rel="noopener noreferrer"
                 style={{
                   display: 'inline-block',
                   padding: '12px 24px',
                   backgroundColor: '#138496',
                   color: 'white',
                   textDecoration: 'none',
                   borderRadius: '6px',
                   marginBottom: '10px'
                 }}>
                edX for Students
              </a>
            </div>

            {/* Coding for Kids */}
            <div style={{
              backgroundColor: '#f8d7da',
              padding: '25px',
              borderRadius: '12px',
              border: '2px solid #f1aeb5',
              boxShadow: '0 3px 6px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#721c24', marginBottom: '15px' }}>💻 Learn Programming</h3>
              <p style={{ color: '#491217', marginBottom: '20px' }}>
                Start your coding journey with beginner-friendly platforms
              </p>
              <a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer"
                 style={{
                   display: 'inline-block',
                   padding: '12px 24px',
                   backgroundColor: '#dc3545',
                   color: 'white',
                   textDecoration: 'none',
                   borderRadius: '6px',
                   marginRight: '10px',
                   marginBottom: '10px'
                 }}>
                Scratch Programming
              </a>
              <a href="https://www.codecademy.com/learn" target="_blank" rel="noopener noreferrer"
                 style={{
                   display: 'inline-block',
                   padding: '12px 24px',
                   backgroundColor: '#c82333',
                   color: 'white',
                   textDecoration: 'none',
                   borderRadius: '6px',
                   marginBottom: '10px'
                 }}>
                Codecademy
              </a>
            </div>

            {/* Study Tools */}
            <div style={{
              backgroundColor: '#e2e3e5',
              padding: '25px',
              borderRadius: '12px',
              border: '2px solid #d6d8db',
              boxShadow: '0 3px 6px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#383d41', marginBottom: '15px' }}>🛠 Study Tools</h3>
              <p style={{ color: '#23272b', marginBottom: '20px' }}>
                Productivity tools to help organize your studies
              </p>
              <a href="https://quizlet.com/" target="_blank" rel="noopener noreferrer"
                 style={{
                   display: 'inline-block',
                   padding: '12px 24px',
                   backgroundColor: '#6c757d',
                   color: 'white',
                   textDecoration: 'none',
                   borderRadius: '6px',
                   marginRight: '10px',
                   marginBottom: '10px'
                 }}>
                Quizlet
              </a>
              <a href="https://www.notion.so/templates/category/school" target="_blank" rel="noopener noreferrer"
                 style={{
                   display: 'inline-block',
                   padding: '12px 24px',
                   backgroundColor: '#545b62',
                   color: 'white',
                   textDecoration: 'none',
                   borderRadius: '6px',
                   marginBottom: '10px'
                 }}>
                Notion Templates
              </a>
            </div>

            {/* Future Competitions */}
            <div style={{
              backgroundColor: '#d4edda',
              padding: '25px',
              borderRadius: '12px',
              border: '2px solid #c3e6cb',
              boxShadow: '0 3px 6px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#155724', marginBottom: '15px' }}>🏆 Student Competitions</h3>
              <p style={{ color: '#0f4419', marginBottom: '20px' }}>
                Age-appropriate competitions and contests for school students
              </p>
              <a href="https://www.codingal.com/competitions/" target="_blank" rel="noopener noreferrer"
                 style={{
                   display: 'inline-block',
                   padding: '12px 24px',
                   backgroundColor: '#28a745',
                   color: 'white',
                   textDecoration: 'none',
                   borderRadius: '6px',
                   marginRight: '10px',
                   marginBottom: '10px'
                 }}>
                Coding Competitions
              </a>
              <a href="https://www.mathcounts.org/" target="_blank" rel="noopener noreferrer"
                 style={{
                   display: 'inline-block',
                   padding: '12px 24px',
                   backgroundColor: '#1e7e34',
                   color: 'white',
                   textDecoration: 'none',
                   borderRadius: '6px',
                   marginBottom: '10px'
                 }}>
                Math Contests
              </a>
            </div>

            {/* Career Exploration */}
            <div style={{
              backgroundColor: '#fff3e0',
              padding: '25px',
              borderRadius: '12px',
              border: '2px solid #ffcc02',
              boxShadow: '0 3px 6px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#bf360c', marginBottom: '15px' }}>🚀 Career Exploration</h3>
              <p style={{ color: '#8d2704', marginBottom: '20px' }}>
                Explore different career paths and what interests you
              </p>
              <a href="https://www.mynextmove.org/explore/ip" target="_blank" rel="noopener noreferrer"
                 style={{
                   display: 'inline-block',
                   padding: '12px 24px',
                   backgroundColor: '#ff9800',
                   color: 'white',
                   textDecoration: 'none',
                   borderRadius: '6px',
                   marginRight: '10px',
                   marginBottom: '10px'
                 }}>
                Career Interest Quiz
              </a>
              <a href="https://www.bls.gov/k12/" target="_blank" rel="noopener noreferrer"
                 style={{
                   display: 'inline-block',
                   padding: '12px 24px',
                   backgroundColor: '#f57c00',
                   color: 'white',
                   textDecoration: 'none',
                   borderRadius: '6px',
                   marginBottom: '10px'
                 }}>
                Career Guide
              </a>
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '40px',
            padding: '20px',
            backgroundColor: 'rgba(248, 249, 250, 0.9)',
            borderRadius: '8px',
            width: '100%',
            maxWidth: '1200px'
          }}>
            <p style={{ color: '#6c757d' }}>
              💡 <strong>Pro Tip:</strong> Focus on learning and building strong foundations.
              Advanced opportunities like internships and professional competitions will be available when you turn 17!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard for students 17+ years
  if (ageGroup === '17plus') {
    return (
      <div style={fullScreenBlueBackground}>
        <div style={fullScreenContainer}>
          <div style={{
            textAlign: 'center',
            marginBottom: '40px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '20px',
            borderRadius: '10px',
            width: '100%',
            maxWidth: '1200px'
          }}>
            <h1 style={{ color: '#2980b9', marginBottom: '10px' }}>
              Professional Dashboard (Age: {age}) 🎯
            </h1>
            <p style={{ color: '#2c3e50', fontSize: '1.1rem' }}>
              Great! You're eligible for professional opportunities, competitions, and internships!
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            width: '100%',
            maxWidth: '1200px'
          }}>
            {/* Competitions Section */}
            <div style={{
              backgroundColor: '#fff',
              padding: '30px',
              borderRadius: '12px',
              border: '3px solid #3498db',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h2 style={{ color: '#2980b9', marginBottom: '15px' }}>🏆 Competitions</h2>
              <p style={{ color: '#34495e', marginBottom: '25px', fontSize: '1.1rem' }}>
                Participate in hackathons, coding contests, and win exciting prizes!
              </p>
              <button
                onClick={() => handleNavigation('/competitions')}
                style={{
                  padding: '15px 30px',
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  width: '100%',
                  marginBottom: '10px'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
              >
                Explore Competitions
              </button>
              <p style={{ fontSize: '14px', color: '#7f8c8d' }}>
                8 active competitions with prizes up to $150k
              </p>
            </div>

            {/* Internships Section */}
            <div style={{
              backgroundColor: '#fff',
              padding: '30px',
              borderRadius: '12px',
              border: '3px solid #9b59b6',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h2 style={{ color: '#8e44ad', marginBottom: '15px' }}>💼 Internships</h2>
              <p style={{ color: '#34495e', marginBottom: '25px', fontSize: '1.1rem' }}>
                Find engineering internships at top companies with great stipends!
              </p>
              <button
                onClick={() => handleNavigation('/internships')}
                style={{
                  padding: '15px 30px',
                  backgroundColor: '#9b59b6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  width: '100%',
                  marginBottom: '10px'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#8e44ad'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#9b59b6'}
              >
                Find Internships
              </button>
              <p style={{ fontSize: '14px', color: '#7f8c8d' }}>
                1100+ opportunities with stipends up to ₹80k/month
              </p>
            </div>

            {/* Learning Resources for Advanced */}
            <div style={{
              backgroundColor: '#fff',
              padding: '30px',
              borderRadius: '12px',
              border: '3px solid #27ae60',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h2 style={{ color: '#229954', marginBottom: '15px' }}>📚 Advanced Learning</h2>
              <p style={{ color: '#34495e', marginBottom: '25px', fontSize: '1.1rem' }}>
                Professional courses and certifications to boost your career
              </p>
              <div style={{ textAlign: 'left' }}>
                <a href="https://www.coursera.org/professional-certificates" target="_blank" rel="noopener noreferrer"
                   style={{
                     display: 'block',
                     padding: '10px 20px',
                     backgroundColor: '#27ae60',
                     color: 'white',
                     textDecoration: 'none',
                     borderRadius: '6px',
                     marginBottom: '10px',
                     textAlign: 'center'
                   }}>
                  Professional Certificates
                </a>
                <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer"
                   style={{
                     display: 'block',
                     padding: '10px 20px',
                     backgroundColor: '#229954',
                     color: 'white',
                     textDecoration: 'none',
                     borderRadius: '6px',
                     marginBottom: '10px',
                     textAlign: 'center'
                   }}>
                  Udemy Courses
                </a>
              </div>
            </div>

            {/* Networking */}
            <div style={{
              backgroundColor: '#fff',
              padding: '30px',
              borderRadius: '12px',
              border: '3px solid #e74c3c',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h2 style={{ color: '#c0392b', marginBottom: '15px' }}>🤝 Professional Network</h2>
              <p style={{ color: '#34495e', marginBottom: '25px', fontSize: '1.1rem' }}>
                Build your professional network and connect with industry experts
              </p>
              <div style={{ textAlign: 'left' }}>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"
                   style={{
                     display: 'block',
                     padding: '10px 20px',
                     backgroundColor: '#e74c3c',
                     color: 'white',
                     textDecoration: 'none',
                     borderRadius: '6px',
                     marginBottom: '10px',
                     textAlign: 'center'
                   }}>
                  LinkedIn Networking
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
                   style={{
                     display: 'block',
                     padding: '10px 20px',
                     backgroundColor: '#c0392b',
                     color: 'white',
                     textDecoration: 'none',
                     borderRadius: '6px',
                     marginBottom: '10px',
                     textAlign: 'center'
                   }}>
                  GitHub Portfolio
                </a>
              </div>
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '40px',
            padding: '25px',
            backgroundColor: 'rgba(248, 249, 250, 0.9)',
            borderRadius: '8px',
            width: '100%',
            maxWidth: '1200px'
          }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>🚀 Ready to Take the Next Step?</h3>
            <p style={{ color: '#6c757d', marginBottom: '20px' }}>
              You're at the perfect age to start building your professional career.
              Explore competitions, apply for internships, and start networking!
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <button
                onClick={() => handleNavigation('/competitions')}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                Browse Competitions
              </button>
              <button
                onClick={() => handleNavigation('/internships')}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#9b59b6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                Find Internships
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
