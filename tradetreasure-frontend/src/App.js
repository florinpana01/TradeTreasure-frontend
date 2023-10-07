import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import SearchResults from './components/SearchResults/SearchResults';
import Profile from './components/Profile/Profile';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <Profile />
        <Product />
        <SearchResults />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
