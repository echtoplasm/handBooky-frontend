import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Handbook from './components/HandBook.js';
import WelcomePage from './components/Welcome.js'
import WebsiteHelp from './components/WebSiteHelper';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/handbooks" element={<Handbook />}/>
          <Route path="/WebSiteHelper" element={<WebsiteHelp />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 
