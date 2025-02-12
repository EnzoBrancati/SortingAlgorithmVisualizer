import React, { useState, useEffect } from "react";
import Bars from "./Bars.tsx";
import SortingControls from "./SortingControls.tsx";

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
        <div className="container">
            <SortingControls generateNewArray={generateNewArray} />
            <Bars array={array} />
        </div>
    );
};

export default SortingVisualizer;
