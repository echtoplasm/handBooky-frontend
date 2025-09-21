import React, { useState, useEffect } from 'react';
import ChatInterface from './chatBot';
import { ArrowDown } from 'lucide-react';
import { ArrowUp } from 'lucide-react';
import { LucideComputer } from 'lucide-react';
import { CalendarCog } from 'lucide-react';
import { HeartPlus } from 'lucide-react';
import { NotebookPen } from 'lucide-react';
import { Binary } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import { BookOpenCheck } from 'lucide-react';
import { Zap } from 'lucide-react';

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
            className="btn btn-link text-decoration-none p-2 border-0 d-flex align-items-center justify-content-center w-100 mb-3 askMeAboutBtn"
            type="button"
            onClick={() => setIsQuestionsOpen(!isQuestionsOpen)}
            aria-expanded={isQuestionsOpen}
            style={{ color: 'inherit' }}
          >
            <h3 className="h5 mb-0 text-secondary me-2">Try asking me about:</h3>
            <span className="text-secondary">{isQuestionsOpen ? <ArrowUp /> : <ArrowDown />}</span>
          </button>

          {/* Collapsible Content */}
          <div className={`collapse ${isQuestionsOpen ? 'show' : ''}`}>
            <div className="sample-questions-section">
              <ul className="sample-questions-list list-unstyled mt-3 mb-4">
                <li className="sample-question-item mb-2">
                  <span className="me-2"><LucideComputer /></span>
                  What are the prerequisites for Computer Science courses?
                </li>
                <li className="sample-question-item mb-2">
                  <span className="me-2"><Binary /></span>
                  Tell me about the Software Engineering track
                </li>
                <li className="sample-question-item mb-2">
                  <span className="me-2"><CalendarCog /></span>
                  What are the important academic deadlines?
                </li>
                <li className="sample-question-item mb-2">
                  <span className="me-2"><NotebookPen /></span>
                  How do I register for classes?
                </li>
                <li className="sample-question-item mb-2">
                  <span className="me-2"><HeartPlus /></span>
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
                  <span className="stat-number"><BookOpenCheck /></span>
                  <small className="text-muted d-block">Student Handbook</small>
                </div>
                <div className="stat-item">
                  <span className="stat-number"><Zap /></span>
                  <small className="text-muted d-block">Instant Answers</small>
                </div>
              </div>
            </div>
          </div>

          <div className="welcome-footer mt-4">
            <small className="text-muted">
              <Lightbulb /><em>Tip: Ask specific questions for the best results!</em>
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
