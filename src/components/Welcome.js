import React, { useState, useEffect } from 'react';
import ChatInterface from './chatBot';

const WelcomePage = () => {
  const [isQuestionsOpen, setIsQuestionsOpen] = useState(true);

  return (
    <div className="flex-grow-1">
      <div className="card text-center p-4">
        <div className="welcome-header mb-4">
          <h1 className="display-4 fw-bold text-gradient mb-3">Welcome to Blazer AI</h1>
          <div className="welcome-badge mx-auto mb-3">
            <span className="badge bg-gradient-custom px-3 py-2 fs-6">
              AB Tech's Smart Assistant
            </span>
          </div>
        </div>

        {/* Collapsible Section - moved here after badge */}
        <div className="sample-questions-wrapper mb-4">
          {/* Collapsible Header */}
          <button
            className="btn btn-link text-decoration-none p-2 border-0 d-flex align-items-center justify-content-center w-100 mb-3"
            type="button"
            onClick={() => setIsQuestionsOpen(!isQuestionsOpen)}
            aria-expanded={isQuestionsOpen}
            style={{ color: 'inherit' }}
          >
            <h3 className="h5 mb-0 text-secondary me-2">Try asking me about:</h3>
            <span className="text-secondary">{isQuestionsOpen ? '🔼' : '🔽'}</span>
          </button>

          {/* Collapsible Content */}
          <div className={`collapse ${isQuestionsOpen ? 'show' : ''}`}>
            <div className="sample-questions-section">
              <ul className="sample-questions-list list-unstyled mt-3 mb-4">
                <li className="sample-question-item mb-2">
                  <span className="me-2">🎓</span>
                  What are the prerequisites for Computer Science courses?
                </li>
                <li className="sample-question-item mb-2">
                  <span className="me-2">📚</span>
                  Tell me about the Software Engineering track
                </li>
                <li className="sample-question-item mb-2">
                  <span className="me-2">📅</span>
                  What are the important academic deadlines?
                </li>
                <li className="sample-question-item mb-2">
                  <span className="me-2">👥</span>
                  How do I register for classes?
                </li>
                <li className="sample-question-item mb-2">
                  <span className="me-2">❓</span>
                  What support services are available to students?
                </li>
              </ul>
            </div>
            <div className="welcome-description mb-4">
              <p className="lead text-muted mb-3">
                Your intelligent companion for navigating AB Tech! I'm here to help students,
                faculty, and staff find answers quickly and efficiently.
              </p>
              <div className="stats-row d-flex justify-content-center gap-4 mb-4">
                <div className="stat-item">
                  <span className="stat-number">3000+</span>
                  <small className="text-muted d-block">Web Pages</small>
                </div>
                <div className="stat-item">
                  <span className="stat-number">📖</span>
                  <small className="text-muted d-block">Student Handbook</small>
                </div>
                <div className="stat-item">
                  <span className="stat-number">⚡</span>
                  <small className="text-muted d-block">Instant Answers</small>
                </div>
              </div>
            </div>
          </div>

          <div className="welcome-footer mt-4">
            <small className="text-muted">
              💡 <em>Tip: Ask specific questions for the best results!</em>
            </small>
          </div>
        </div>
      </div>
      <div>
        <ChatInterface />
      </div>
    </div>
  );
};

export default WelcomePage;
