import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", formData);

    // Here you can call your backend API using fetch() or axios:
    // fetch("/api/feedback", { method: "POST", body: JSON.stringify(formData) })

    setSubmitted(true);
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <div className="feedback-container">
      <h1 className="feedback-title">💬 Share Your Feedback</h1>
      <p className="feedback-subtitle">
        We’d love to hear what you think about our Virtual Piano project!
      </p>

      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Your Feedback</label>
          <textarea
            name="feedback"
            rows="5"
            placeholder="Write your thoughts here..."
            value={formData.feedback}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Submit Feedback
        </button>
      </form>

      {submitted && (
        <div className="thankyou-message">
          <h2>🎉 Thank you for your feedback!</h2>
          <p>We really appreciate your time and input 💙</p>
        </div>
      )}

      <footer className="feedback-footer">
        <p>🎶 Made with ❤️ by Shubham, Rohan, Sameer & Soham</p>
      </footer>
    </div>
  );
};

export default Feedback;