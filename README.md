# Blazer AI Frontend

A React-based frontend application featuring an AI-powered chatbot interface for AB Tech student handbook assistance.

## Features

- **AI Chat Interface**: Interactive chatbot powered by Claude 3.5 Haiku
- **Vector-Powered Search**: Intelligent query routing with semantic understanding
- **Sample Questions**: Pre-built questions for common student inquiries
- **Responsive Design**: Mobile-first design optimized for all devices
- **Real-time Messaging**: Live chat experience with loading indicators
- **Modern UI Components**: Clean, accessible interface with intuitive navigation

## Tech Stack

- **React** - Frontend framework
- **Bootstrap4** - Custom styling with responsive design
- **Fetch API** - HTTP client for backend communication
- **Static Buildpack** - Heroku deployment optimization

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/echtoplasm/handBooky-frontend
cd client
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create a `.env` file in the root directory with:
```env
REACT_APP_API_URL=https://your-backend-url
```

### Development

Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

### Production Build

Build the application for production:
```bash
npm run build
```

## Project Structure

```
frontend/
├── public/
│   ├── resources/
│   │   └── ab-tech-logo.jpg
│   ├── abtech.svg
│   ├── blazer-preview.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── AboutUs.js
│   │   ├── chatBot.js
│   │   ├── HandBook.js
│   │   ├── Navbar.js
│   │   └── Welcome.js
│   ├── context/
│   │   └── sampleQuestionContext.js
│   ├── App.js
│   ├── config.js
│   ├── index.css
│   └── index.js
├── package.json
├── README.md
└── static.json
```

## Key Components

### ChatInterface
- **Message Display**: Conversation history with user/AI message differentiation
- **Input Handling**: Text area with send button and keyboard shortcuts
- **State Management**: Loading states and error handling
- **Sample Questions Integration**: Clickable suggestions that populate input

### SampleQuestions
- **Curated Content**: Questions optimized for the AI agent's knowledge base
- **Categories**: Academic, policies, campus resources, student life
- **Interactive**: One-click question insertion into chat input

### Responsive Design
- **Mobile-First**: Optimized for smartphone usage
- **Tablet Support**: Intermediate breakpoints for tablet devices
- **Desktop Enhancement**: Full-featured experience on larger screens

## API Integration

The frontend communicates with the Blazer AI backend for:

### Chat Endpoint (`/api/chat`)
```javascript
// Request format
{
  message: "What are the library hours?",
  model: "claude-3-5-haiku"  // optional
}

// Response format
{
  success: true,
  message: "AI response with context",
  model: "claude-3-5-haiku",
  timestamp: "2025-09-27T14:30:00.000Z"
}
```

### Query Processing
- **Course Code Detection**: Automatic routing for course-specific queries
- **Vector Search**: Semantic understanding for general questions
- **Contextual Responses**: AI responses include source citations

## Deployment

### Heroku Static Buildpack

The application is deployed using Heroku's static buildpack with `static.json` configuration:

```json
{
  "https_only": true,
  "root": "build/",
  "routes": {
    "/**": "index.html"
  }
}
```

### Deployment Steps

1. Create Heroku app
```bash
heroku create blazer-ai-frontend
```

2. Set buildpack
```bash
heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static
```

3. Configure environment
```bash
heroku config:set REACT_APP_API_URL=https://your-backend-url.herokuapp.com
```

4. Deploy
```bash
git push heroku main
```

### Alternative Platforms
The built application can be deployed to:
- **Netlify** - Automatic deployments from Git
- **Vercel** - Optimized for React applications  
- **GitHub Pages** - Free static hosting
- **Any CDN/Static Host** - Standard static file serving

## Environment Configuration

### Development
```env
REACT_APP_API_URL=http://localhost:5000
```

### Production
```env
REACT_APP_API_URL=https://your-backend-url.herokuapp.com
```

## Features in Detail

### Chat Interface
- **Message Threading**: Clear conversation flow with timestamps
- **Loading States**: Visual feedback during AI processing
- **Error Handling**: User-friendly error messages with retry options
- **Keyboard Shortcuts**: Enter to send, Shift+Enter for line breaks
- **Auto-scroll**: Automatic scrolling to latest messages

### Sample Questions
- **Contextual Suggestions**: Questions tailored to AB Tech students
- **Category Organization**: Academic, campus, policies, services
- **Dynamic Loading**: Questions populate chat input on click
- **Mobile Optimization**: Touch-friendly interface for mobile users

### Responsive Behavior
- **Mobile (< 768px)**: Single-column layout, touch-optimized inputs
- **Tablet (768px - 1024px)**: Balanced layout with adequate spacing
- **Desktop (> 1024px)**: Full-featured interface with optimal information density

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App (irreversible)

## Browser Support

- **Chrome** (latest) - Full feature support
- **Firefox** (latest) - Full feature support  
- **Safari** (latest) - Full feature support
- **Edge** (latest) - Full feature support
- **Mobile browsers** - iOS Safari, Chrome Mobile

## Performance Optimizations

- **Static Buildpack**: Optimized serving of static assets
- **Code Splitting**: Automatic bundling optimization
- **Lazy Loading**: Components loaded as needed
- **Caching**: Browser caching for static resources

## Accessibility Features

- **Semantic HTML**: Proper markup for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **ARIA Labels**: Screen reader support for interactive elements
- **Color Contrast**: WCAG-compliant color schemes
- **Focus Management**: Clear focus indicators

## Security Considerations

- **HTTPS Enforcement**: All production traffic over HTTPS
- **CORS Configuration**: Backend restricts origins appropriately  
- **Input Validation**: Client-side validation with server-side verification
- **Error Handling**: No sensitive information in error messages

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Backend Integration

This frontend requires the Blazer AI backend API running at the configured `REACT_APP_API_URL`. The backend provides:

- **AI Chat Processing**: Claude 3.5 Haiku integration
- **Vector Search**: Semantic similarity for student handbook content
- **Course Information**: Detailed academic information with prerequisites
- **Source Citations**: Transparent information sourcing

For local development, ensure the backend is running on the configured port and accessible from the frontend application.

## License

This project is private and proprietary.
