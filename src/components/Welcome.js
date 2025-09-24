import React, { useRef, createContext, useContext, useState } from 'react';
import ChatInterface from './chatBot';
import {
  LucideComputer,
  CalendarCog,
  NotebookPen,
  Binary,
  Lightbulb,
  BookOpenCheck,
  Zap,
} from 'lucide-react';

import { Context, SampleQuestionProvider } from '../context/sampleQuestionContext';



const WelcomePage = () => {
  const [globalData, setGlobalData] = useContext(Context);
 
  const handleQuestionClick = (questionText) => {
    console.log('Question clicked', questionText);
    console.log('setGlobalData function', setGlobalData);
    setGlobalData(questionText);
    console.log('after setGlobalData called');
  }

  return (
    <div className="flex-grow-1">
      <div className="text-center p-4">
        <div className="welcome-header mb-4">
          <h1 className="display-4 fw-bold text-gradient mb-3">Welcome to Blazer AI</h1>
          <div className="welcome-badge mx-auto mb-3">
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 fs-6 fw-medium">
              A-B Tech's Smart Assistant
            </span>
          </div>
        </div>

        {/* Sample Questions always visible */}
        <div className="sample-questions-wrapper mb-4">
          <h3 className="h5 mb-3 text-secondary">Try asking me about:</h3>

          <div className="sample-questions-section">
            <div className="row mt-3 mb-4 g-3">
              <div className="col-12 col-md-6">
                <div
                  className="sample-question-item d-flex align-items-center"
                  onClick={() => handleQuestionClick("What are the prerequisites for Java Programming?")}
                >
                  <span className="me-2">
                    <LucideComputer />
                  </span>
                  What are the prerequisites for Java Programming?
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div
                  className="sample-question-item d-flex align-items-center"
                  onClick={() => handleQuestionClick("What topics are covered in MySQL?")}
                >
                  <span className="me-2">
                    <Binary />
                  </span>
                  What topics are covered in MySQL?
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div
                  className="sample-question-item d-flex align-items-center"
                  onClick={() => handleQuestionClick("Do you offer world history?")}
                >
                  <span className="me-2">
                    <CalendarCog />
                  </span>
                  Do you offer World History?
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div
                  className="sample-question-item d-flex align-items-center"
                  onClick={() => handleQuestionClick("How do I register for classes?")}
                >
                  <span className="me-2">
                    <NotebookPen />
                  </span>
                  How do I register for classes?
                </div>
              </div>
            </div>

            <div>
                <ChatInterface />
            </div>
          </div>

          <div className="welcome-description my-4">
            <p className="lead text-muted mb-3">
              Your intelligent companion for navigating A&nbsp;-&nbsp;B Tech! I'm here to help students, faculty,
              and staff find answers quickly and efficiently.
            </p>
            <div className="stats-row d-flex justify-content-center gap-4 mb-4">
              <div className="stat-item">
                <span className="stat-number">3000+</span>
                <small className="text-muted d-block">Web Pages</small>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  <BookOpenCheck />
                </span>
                <small className="text-muted d-block">Student Handbook</small>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  <Zap />
                </span>
                <small className="text-muted d-block">Instant Answers</small>
              </div>
            </div>
          </div>

          <div className="welcome-footer mt-4">
            <small className="text-muted">
              <Lightbulb /> <em>Tip: Ask specific questions for the best results!</em>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
