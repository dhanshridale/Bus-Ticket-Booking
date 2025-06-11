import React, { useState } from "react";
import "../styles/help.css";


const Help = () => {
  const [faqs, setFaqs] = useState([
    { question: "How can I book a bus ticket?", answer: "You can book a bus ticket by navigating to the 'Book Ticket' section and selecting your travel details.", isOpen: false },
    { question: "Can I cancel my booking?", answer: "Yes, you can cancel your booking under the 'Manage Bookings' section before the departure time.", isOpen: false },
    { question: "What payment methods are accepted?", answer: "We accept credit cards, debit cards, and various online payment methods like UPI.", isOpen: false },
  ]);

  const [userQuestion, setUserQuestion] = useState("");

  // Toggle FAQ visibility
  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  // Handle question submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userQuestion.trim()) {
      alert(`Your question has been submitted: ${userQuestion}`);
      setUserQuestion("");
    } else {
      alert("Please enter a valid question.");
    }
  };

  return (
    <div className="help-con">
    <div className="help-page">
      <h1>Help Center</h1>
      <h2>Frequently Asked Questions</h2>

      <div className="faq-section">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <button className="toggle-button">
                {faq.isOpen ? "-" : "+"}
              </button>
            </div>
            {faq.isOpen && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>

      <div className="ask-question">
        <h2>Have a specific question?</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            placeholder="Type your question here..."
            rows="4"
          />
          <button type="submit">Submit Question</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Help;

