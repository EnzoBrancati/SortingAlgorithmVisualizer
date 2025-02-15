import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="home-page">
            <h1>Algorithms Visualizer</h1>
            <div className="buttons">
                <Link to="/sorting">
                    <button>Sorting Visualizer</button>
                </Link>
                <Link to="/pathfinding">
                    <button>Pathfinding Visualizer</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
