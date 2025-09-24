import Navbar from './components/Navbar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Handbook from './components/HandBook.js';
import WelcomePage from './components/Welcome.js';
import AboutUs from './components/AboutUs.js';
import { SampleQuestionProvider } from './context/sampleQuestionContext.js';

function App() {
  return (
    <BrowserRouter>
      <div className="container app-container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <SampleQuestionProvider>
                <WelcomePage />
              </SampleQuestionProvider>
            }
          />
          <Route path="/handbooks" element={<Handbook />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
