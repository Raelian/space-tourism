import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import Crew from "./pages/crew/Crew.jsx";
import Destination from './pages/destination/Destination.jsx';
import Technology from './pages/technology/Technology.jsx';

function App() {
  return (
      <Router basename='/space-tourism'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="destination" element={<Destination />} />
            <Route path="crew" element={<Crew />} />
            <Route path="technology" element={<Technology />} />
          </Route>
        </Routes>
      </Router>
  )
}

export default App;
