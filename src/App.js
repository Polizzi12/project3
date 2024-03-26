import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Weather from './components/Weather';
import SearchBar from './components/search';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;

