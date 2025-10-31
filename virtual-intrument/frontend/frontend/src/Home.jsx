import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">🎹 Virtual Piano Experience</h1>
          <p className="hero-subtitle">
            A modern browser-based piano built with <strong>React.js</strong> and <strong>Node.js</strong> — 
            play music, share feedback, and explore creativity in sound.
          </p>
        </div>

        <div className="piano-animation">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="piano-key"></div>
          ))}
        </div>
      </section>

      {/* ABOUT PROJECT */}
      <section className="about">
        <div className="about-text">
          <h2>About the Project</h2>
          <p>
            The <strong>Virtual Piano</strong> is a creative web project designed to let users 
            play musical notes instantly in their browser. With real-time sound playback 
            and an interactive keyboard, it turns your screen into a digital instrument.
          </p>
          <p>
            Built using <span className="highlight">React.js</span> for frontend and 
            <span className="highlight"> Node.js</span> for backend, it ensures smooth 
            performance and efficient data handling for users and feedback.
          </p>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1068/1068691.png"
          alt="Piano Illustration"
          className="about-image"
        />
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2>✨ Key Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>🎵 Interactive Piano</h3>
            <p>Play notes using keyboard or mouse — responsive and realistic keys.</p>
          </div>
          <div className="feature-card">
            <h3>👤 User Profiles</h3>
            <p>Save your data, track sessions, and personalize your experience.</p>
          </div>
          <div className="feature-card">
            <h3>💬 Feedback System</h3>
            <p>Share suggestions and help improve our virtual instrument experience.</p>
          </div>
          <div className="feature-card">
            <h3>🌐 Full Stack Power</h3>
            <p>Developed using the MERN stack for seamless integration and fast performance.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>🎶 Made with passion by Shubham, Rohan, Sameer & Soham 🎶</p>
      </footer>
    </div>
  );
};

export default Home;