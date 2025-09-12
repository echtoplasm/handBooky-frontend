# Handbooky Frontend
{ AI used for this README for any questions feel free to reach out}
A React-based frontend application featuring an AI-powered chatbot interface.

## Features

- **AI Chat Interface**: Interactive chatbot powered by GPT-5 Nano
- **Responsive Design**: Built with Bootstrap 5 for mobile and desktop compatibility
- **Real-time Messaging**: Live chat experience with typing indicators
- **Modern UI Components**: Clean, professional interface with Lucide React icons

## Tech Stack

- **React 19.1.0** - Frontend framework
- **Bootstrap 5.3.8** - CSS framework and responsive design
- **Lucide React** - Modern icon library
- **React Router DOM** - Client-side routing
- **React Bootstrap** - Bootstrap components for React

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd client
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create a `.env` file in the root directory with:
```env
REACT_APP_API_URL=http://localhost:5000
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

Make sure your backend server is running on `http://localhost:5000` for the chat functionality to work.

### Production Build

Build the application for production:
```bash
npm run build
```

Serve the production build:
```bash
npm start
```

## Project Structure

```
src/
├── components/
│   └── ChatInterface.js    # Main chat component
├── App.js                  # Main app component
├── index.js               # Application entry point
└── ...
```

## API Integration

The frontend communicates with a Node.js/Express backend that provides:
- AI chat endpoints (`/api/chat`)
- Authentication middleware
- Integration with Heroku AI inference models

## Deployment

### Heroku Deployment

1. Create a Heroku app
```bash
heroku create your-app-name
```

2. Set environment variables
```bash
heroku config:set REACT_APP_API_URL=https://your-backend-url.herokuapp.com
```

3. Deploy
```bash
git push heroku main
```

### Other Platforms

The built application is a static site that can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Serve production build
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App (irreversible)

## Chat Interface Features

- **Message History**: Persistent conversation display
- **User Input**: Text area with keyboard shortcuts (Enter to send, Shift+Enter for new line)
- **Typing Indicators**: Visual feedback when AI is processing
- **Error Handling**: Graceful handling of API errors
- **Responsive Layout**: Adapts to different screen sizes
- **Accessibility**: Proper semantic markup and ARIA labels

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Backend Integration

This frontend is designed to work with the Handbooky backend API. Ensure the backend is running and accessible at the URL specified in `REACT_APP_API_URL`.

For local development, the backend should typically be running on `http://localhost:5000`.
