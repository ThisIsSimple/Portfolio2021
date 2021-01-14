import React from "react";
import "./Hexagon.scss";

import HexagonImage from "../../assets/etc/hexagon.svg";

const Hexagon = ({className}) => {
    return (
        <>
            <img src={HexagonImage} alt="hexagon" className={`hexagon pointer ${className}`}/>
        </>
    );
};

export default Hexagon;