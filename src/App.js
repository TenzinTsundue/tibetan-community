import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BusinessDirectory from './components/BusinessDirectory';
import SupportGroups from './components/SupportGroups';
import Rentals from './components/Rentals';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<BusinessDirectory />} />
          <Route path="/support-groups" element={<SupportGroups />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
