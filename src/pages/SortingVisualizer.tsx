import React, { useState, useEffect } from "react";
import SortingControls from "../components/sorting/SortingControls.tsx";
import Bars from "../components/sorting/Bars.tsx";

const SortingVisualizer: React.FC = () => {
    const [array, setArray] = useState<number[]>([]);
    const [numElements] = useState(50);

    useEffect(() => {
        generateNewArray();
    }, [numElements]);

    const generateNewArray = () => {
        const newArray = Array.from({ length: numElements }, () =>
            Math.floor(Math.random() * 500)
        );
        setArray(newArray);
    };

    return (
        <div className="sorting-visualizer">
            <h1>Sorting Visualizer</h1>
            <div className="bars-container">
                <Bars array={array} />
            </div>
            <SortingControls generateNewArray={generateNewArray} />
        </div>
    );
};

export default SortingVisualizer;
