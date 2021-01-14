import React from "react";
import "./Icon.scss";

const Icon = ({img, name}) => {
    return (
        <>
            <div className="icon pointer" data-bs-toggle="tooltip" data-bs-placement="bottom" title={name}>
                <img src={img} alt={name} className="img-icon"/>
            </div>
        </>
    );
};

export default Icon;