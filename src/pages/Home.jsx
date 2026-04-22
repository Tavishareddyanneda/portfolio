import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="profile-container">
          <div className="profile-image">
            <div className="profile-placeholder">
              <span>TRA</span>
            </div>
          </div>
          <div className="hero-text">
            <h1>Tavisha Reddy Anneda</h1>
            <p className="tagline">B.Tech (Int. CSE) Student at Mahindra École Centrale</p>
          </div>
        </div>
      </section>

      <section className="section about-section">
        <h2 className="section-title">About Me</h2>
        <div className="section-content">
          <p>
            I am a dedicated B.Tech (Integrated CSE) student at Mahindra École Centrale with a passion for 
            technology and innovation. Through my academic journey, I have developed strong problem-solving 
            skills and a keen interest in building impactful solutions. I am eager to apply my knowledge 
            to real-world challenges and contribute to meaningful projects.
          </p>
        </div>
      </section>

      <section className="section research-section">
        <h2 className="section-title">Research Interests</h2>
        <div className="section-content">
          <ul className="interests-list">
            <li>Data Analytics & Machine Learning</li>
            <li>Enterprise Risk Management</li>
            <li>Full-Stack Development</li>
            <li>Data-Driven Solutions</li>
          </ul>
        </div>
      </section>

      <section className="section details-section">
        <h2 className="section-title">Personal Details</h2>
        <div className="details-grid">
          <div className="detail-card">
            <h3>Contact Information</h3>
            <div className="detail-item">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">(91) 9392773213</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Personal Email:</span>
              <span className="detail-value">annedatavishareddy@gmail.com</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">College Email:</span>
              <span className="detail-value">se23umcs061@mahindrauniverssity.edu.in</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Address:</span>
              <span className="detail-value">Plot no 2A, Defence Colony, Sainikpuri, Secunderabad, India - 500094</span>
            </div>
          </div>

          <div className="detail-card">
            <h3>Technical Skills</h3>
            <div className="skills-container">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Tableau</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">Canva</span>
              <span className="skill-tag">Bootstrap</span>
              <span className="skill-tag">MySQL Workbench</span>
              <span className="skill-tag">Jupyter Notebook</span>
            </div>
          </div>

          <div className="detail-card">
            <h3>Education</h3>
            <div className="education-item">
              <h4>B.Tech (Int. CSE)</h4>
              <p>Mahindra École Centrale</p>
              <p className="education-detail">CGPA: 5.5/10 (till 5th semester)</p>
            </div>
            <div className="education-item">
              <h4>Intermediate</h4>
              <p>Indus Universal School (CBSE), Hyderabad</p>
              <p className="education-detail">Percentage: 80%</p>
            </div>
            <div className="education-item">
              <h4>10th Grade</h4>
              <p>Indus Universal School (CBSE), Hyderabad</p>
              <p className="education-detail">Percentage: 79.8%</p>
            </div>
          </div>

          <div className="detail-card">
            <h3>Interests & Activities</h3>
            <ul className="activities-list">
              <li><strong>Sports:</strong> Pistol Shooting</li>
              <li><strong>Interests:</strong> Dancing</li>
              <li><strong>Social Service:</strong> Coordinated food distribution programs for low-income families during crisis periods</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section training-section">
        <h2 className="section-title">Training & Certifications</h2>
        <div className="training-card">
          <h3>ERM Level-1 Certificate (IRM)</h3>
          <p>Mahindra University, Hyderabad</p>
          <p className="training-desc">Built an enterprise risk management solution that identifies, assesses, and monitors organizational risks through data-driven insights and predictive analytics.</p>
        </div>
      </section>
    </div>
  )
}

export default Home