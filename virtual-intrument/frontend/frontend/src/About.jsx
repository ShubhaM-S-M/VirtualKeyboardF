import React from "react";
import "./About.css";

const team = [
  {
    name: "Shubham",
    role: "Frontend Developer",
    contribution:
      "Designed and implemented the user interface using React.js, including the virtual piano layout and interactive components for smooth user experience.",
  },
  {
    name: "Rohan",
    role: "Backend Developer",
    contribution:
      "Developed the Node.js server, handled API routes for user authentication, feedback submission, and managed the database connections.",
  },
  {
    name: "Sameer",
    role: "Project Lead & Full Stack Developer",
    contribution:
      "Coordinated the project structure, integrated frontend with backend, and ensured proper functionality of the virtual piano and user management system.",
  },
  {
    name: "Soham",
    role: "UI/UX Designer & Documentation",
    contribution:
      "Created the visual design and user-friendly layout, prepared documentation, and contributed to overall responsiveness and styling.",
  },
];

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Our Project</h1>
      <p className="about-description">
        Our project is a browser-based virtual piano built using React.js and Node.js. 
        It allows users to play musical notes interactively, view their profiles, 
        and share feedback. This project was developed collaboratively by our team.
      </p>

      <div className="team-grid">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <h2 className="member-name">{member.name}</h2>
            <h3 className="member-role">{member.role}</h3>
            <p className="member-contribution">{member.contribution}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;