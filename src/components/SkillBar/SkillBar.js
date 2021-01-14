import React from "react";
import "./SkillBar.scss";

const SkillBar = ({name, level, className=""}) => {
    return (
        <>
            <div className={`skill-container ${className}`}>
                <div className="skill-name-text">{name}</div>
                <div className="skill-bar-container">
                    <div className="skill-bar" style={{width: `${level * 10}%`}}/>
                    <small className="skill-level-text">Lv.{level}</small>
                </div>
            </div>
        </>
    );
};

export default SkillBar;