import React, { useState, useRef, useEffect } from 'react';
import { BotMessageSquare } from 'lucide-react';

const ChatInterface = () => {
  const [messages, setMessages] = useState(() => [
    {
      id: 'initial-1',
      text: "Hello! I'm Blazer your AB-tech centered AI assistant. How can I help?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    // Add user message
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Get AI response
      const aiResponseText = await fetch(
        'https://handbooky-backend-24df629011cd.herokuapp.com/api/chat',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: userMessage.text,
          }),
        }
      );

      const aiResponseData = await aiResponseText.json();

      console.log('AI response data', aiResponseData);

      const aiMessage = {
        id: Date.now() + 1,
        text: aiResponseData.message || 'no reponse recieved',
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        id: new Date().toDateString(),
        text: "Sorry, I'm having trouble responding right now. Please try again.",
        sender: 'bot',
        timestamp: new Date(),
        isError: true,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="p-0 mt-2 mt-md-3">
      <div className="row h-100 justify-content-center">
        <div className="col-12 col-lg-8 border d-flex flex-column rounded p-1 p-md-3 bg-light">
          {/* Header */}
          {/* Messages Container */}
          <div 
            className="flex-grow-1 overflow-auto p-1 p-md-3" 
            style={{ 
              backgroundColor: '#f8f9fa', 
              paddingBottom: '160px',
              marginBottom: '10px'
            }}
          >
            {messages.map(message => (
              <div
                key={message.id}
                className={`d-flex mb-2 mb-md-3 ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
              >
                <div
                  className={`d-flex ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                  style={{ maxWidth: '85%', '@media (min-width: 768px)': { maxWidth: '70%' } }}
                >
                  {/* Avatar */}
                  <div className={message.sender === 'user' ? 'ms-1 ms-md-2' : 'me-1 me-md-2'}>
                    <div
                      className={`rounded-circle d-flex align-items-center justify-content-center ${
                        message.sender === 'user'
                          ? 'userChatBubble'
                          : message.isError
                            ? 'bg-danger'
                            : 'avatarBackground'
                      }`}
                      style={{ width: '28px', height: '28px', '@media (min-width: 768px)': { width: '32px', height: '32px' } }}
                    >
                      <span className="text-white" style={{ fontSize: '0.7rem' }}>
                        {message.sender === 'user' ? <span className='whiteSilhouette p-0'>👤</span> : <BotMessageSquare />}
                      </span>
                    </div>
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`px-2 px-md-3 py-2 rounded mb-2 mb-md-3 ${
                      message.sender === 'user'
                        ? 'userChatBubble text-white'
                        : message.isError
                          ? 'bg-danger bg-opacity-10 text-danger border border-danger border-opacity-25'
                          : 'bg-white text-dark border'
                    }`}
                  >
                    <p className="mb-1" style={{ whiteSpace: 'pre-wrap', fontSize: '0.9rem' }}>
                      {message.text}
                    </p>
                    <small
                      className={`d-block ${
                        message.sender === 'user' ? 'text-light' : 'text-muted'
                      }`}
                    ></small>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="d-flex justify-content-start">
                <div className="me-1 me-md-2">
                  <div
                    className="avatarBackground rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '28px', height: '28px', '@media (min-width: 768px)': { width: '32px', height: '32px' } }}
                  >
                    <span className="text-white" style={{ fontSize: '0.7rem' }}><BotMessageSquare /></span>
                  </div>
                </div>
                <div className="bg-white border rounded p-2 p-md-3">
                  <div className="d-flex align-items-center">
                    <div className="d-flex me-2">
                      <div
                        className="bg-secondary rounded-circle me-1"
                        style={{ width: '6px', height: '6px', animation: 'pulse 1.5s infinite' }}
                      ></div>
                      <div
                        className="bg-secondary rounded-circle me-1"
                        style={{
                          width: '6px',
                          height: '6px',
                          animation: 'pulse 1.5s infinite 0.2s',
                        }}
                      ></div>
                      <div
                        className="bg-secondary rounded-circle"
                        style={{
                          width: '6px',
                          height: '6px',
                          animation: 'pulse 1.5s infinite 0.4s',
                        }}
                      ></div>
                    </div>
                    <small className="text-muted">AI is typing...</small>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div>
            <div className="bg-white border border-2 border-primary p-2 p-md-3 mx-1 mx-md-auto w-auto rounded mb-2 mb-md-4" 
                 style={{ left: '0.5rem', right: '0.5rem', '@media (min-width: 768px)': { left: 'auto', right: 'auto', width: '75%' } }}>
              <div className="row g-2 g-md-3">
                <div className="col">
                  <div className="position-relative">
                    <textarea
                      ref={inputRef}
                      value={inputValue}
                      onChange={e => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message here..."
                      rows={1}
                      className="form-control resize-none custom-textarea"
                      style={{ minHeight: '40px', maxHeight: '100px', fontSize: '0.9rem' }}
                      disabled={isTyping}
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="btn h-100 d-flex align-items-center justify-content-center"
                    style={{ width: '40px',
                             minHeight: '40px',
                             backgroundColor: '#dc3545',
                             borderColor: '#dc3545',
                             color: 'white'
                           }}
                  >
                    <span style={{ fontSize: '0.9rem' }}>➤</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center mt-2 d-none d-md-block">
              <small className="text-muted">Press Enter to send • Shift + Enter for new line</small>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .resize-none {
          resize: none;
        }

        .overflow-auto::-webkit-scrollbar {
          width: 4px;
        }

        .overflow-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .overflow-auto::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }

        .overflow-auto::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }

        @media (max-width: 767px) {
          .fixed-bottom {
            left: 0.5rem !important;
            right: 0.5rem !important;
            width: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ChatInterface;
