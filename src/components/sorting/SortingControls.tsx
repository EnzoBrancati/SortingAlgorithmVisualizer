import React from "react";

type SortingControlsProps = {
    generateNewArray: () => void;
};

const SortingControls: React.FC<SortingControlsProps> = ({ generateNewArray }) => {
    return (
        <div className="sorting-controls">
            <button onClick={generateNewArray}>Generate New Array</button>
        </div>
    );
};

export default SortingControls;