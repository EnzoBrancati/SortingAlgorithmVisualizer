import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SortingVisualizer from './components/SortingVisualizer.tsx';
import PathfindingVisualizer from './components/PathfindingVisualizer.tsx';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/SortingVisualizer">Pagina 1</Link>
                        </li>
                        <li>
                            <Link to="/PathfindingVisualizer">Pagina 2</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/SortingVisualizer" element={<SortingVisualizer />} />
                    <Route path="/PathfindingVisualizer" element={<PathfindingVisualizer />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
