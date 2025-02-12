import React from "react";
import "./../style/Bars.css";

type BarsProps = {
    array: number[];
};

const Bars: React.FC<BarsProps> = ({ array }) => {
    return (
        <div className="bars-container">
            {array.map((value, index) => (
                <div
                    key={index}
                    className="bar"
                    style={{ height: `${value}px` }}
                ></div>
            ))}
        </div>
    );
};

export default Bars;