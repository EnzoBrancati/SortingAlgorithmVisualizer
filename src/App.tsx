import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SortingVisualizer from './pages/SortingVisualizer';
import PathfindingVisualizer from './pages/PathfindingVisualizer';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sorting" element={<SortingVisualizer />} />
                    <Route path="/pathfinding" element={<PathfindingVisualizer />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;