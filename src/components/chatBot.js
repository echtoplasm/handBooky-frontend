import React, { useState, useRef, useEffect } from 'react';

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

  /*
  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };
*/
  return (
    <div className="container-fluid p-0">
      <div className="row h-100 justify-content-center">
        <div className="col-12 col-lg-8 border d-flex flex-column rounded p-3 bg-light">
          {/* Header */}
          <div className="bg-white border-bottom p-3 shadow-sm rounded">
            <div className="d-flex align-items-center">
              <div
                className="avatarBackground rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{ width: '40px', height: '40px'}}
              >
                <span className="text-white fw-bold">🤖</span>
              </div>
              <div>
                <h5 className="mb-0 text-dark">Blazer AI</h5>
                <small className="text-muted">Online and ready to help</small>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-grow-1 overflow-auto p-3" style={{ backgroundColor: '#f8f9fa', paddingBottom: '140px', marginBottom: '65px'}}>
            {messages.map(message => (
              <div
                key={message.id}
                className={`d-flex mb-3 ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
              >
                <div
                  className={`d-flex ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                  style={{ maxWidth: '70%' }}
                >
                  {/* Avatar */}
                  <div className={message.sender === 'user' ? 'ms-2' : 'me-2'}>
                    <div
                      className={`rounded-circle d-flex align-items-center justify-content-center ${
                        message.sender === 'user'
                          ? 'userChatBubble'
                          : message.isError
                            ? 'bg-danger'
                            : 'avatarBackground'
                      }`}
                      style={{ width: '32px', height: '32px' }}
                    >
                      <span className="text-white small">
                        {message.sender === 'user' ? <span className='whiteSilhouette p-0'>👤</span> : '🤖'}
                      </span>
                    </div>
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`px-3 py-2 rounded mb-3 ${
                      message.sender === 'user'
                        ? 'userChatBubble text-white'
                        : message.isError
                          ? 'bg-danger bg-opacity-10 text-danger border border-danger border-opacity-25'
                          : 'bg-white text-dark border'
                    }`}
                  >
                    <p className="mb-1 small" style={{ whiteSpace: 'pre-wrap' }}>
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
                <div className="me-2">
                  <div
                    className="avatarBackground rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '32px', height: '32px' }}
                  >
                    <span className="text-white small">🤖</span>
                  </div>
                </div>
                <div className="bg-white border rounded p-3">
                  <div className="d-flex align-items-center">
                    <div className="d-flex me-2">
                      <div
                        className="bg-secondary rounded-circle me-1"
                        style={{ width: '8px', height: '8px', animation: 'pulse 1.5s infinite' }}
                      ></div>
                      <div
                        className="bg-secondary rounded-circle me-1"
                        style={{
                          width: '8px',
                          height: '8px',
                          animation: 'pulse 1.5s infinite 0.2s',
                        }}
                      ></div>
                      <div
                        className="bg-secondary rounded-circle"
                        style={{
                          width: '8px',
                          height: '8px',
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
            <div className="bg-white border border-2 border-primary p-3 fixed-bottom mx-auto w-75 rounded mb-4">
              <div className="row g-3">
                <div className="col">
                  <div className="position-relative">
                    <textarea
                      ref={inputRef}
                      value={inputValue}
                      onChange={e => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message here..."
                      rows={1}
                      className="form-control resize-none"
                      style={{ minHeight: '44px', maxHeight: '120px' }}
                      disabled={isTyping}
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="btn btn-primary h-100 d-flex align-items-center justify-content-center"
                    style={{ width: '44px' }}
                  >
                    <span>➤</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center mt-2">
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
          width: 6px;
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
      `}</style>
    </div>
  );
};

export default ChatInterface;
