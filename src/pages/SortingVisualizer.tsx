import React, { useState } from 'react';
import "../style/Bars.css"

const SortingVisualizer: React.FC = () => {
    const [array, setArray] = useState<number[]>([5, 3, 8, 1, 2]);

    const sortArray = () => {
        const sortedArray = [...array].sort((a, b) => a - b);
        setArray(sortedArray);
    };

    return (
        <div className="sorting-visualizer">
            <h1>Sorting Visualizer</h1>
            <div className="array-bars">
                {array.map((value, index) => (
                    <div key={index} className="bar" style={{ height: `${value * 30}px` }}></div>
                ))}
            </div>
            <button onClick={sortArray}>Sort Array</button>
        </div>
    );
};

export default SortingVisualizer;
