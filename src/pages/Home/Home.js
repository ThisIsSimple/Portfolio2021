import React from "react";
import "./Home.scss";
import Background from "../../components/Background/Background";
import TypingAnimation from "../../components/TypingAnimation/TypingAnimation";
import Hexagon from "../../components/Hexagon/Hexagon";
import SkillBar from "../../components/SkillBar/SkillBar";
import Clock from "../../components/Clock/Clock";
import Icon from "../../components/Icon/Icon";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

// Load Data
import {skillData, projectIconData, projectData} from "../../database/data";

// Profile Image
import Profile from "../../assets/profile/profile.jpg";

const Home = () => {
    return (
        <>
            <Background/>
            <section className="container d-flex align-items-center mb-5" style={{height: '100vh'}}>
                <h1 className="font-title text-white">
                    <span className="animate__animated animate__fadeIn">안녕하세요,</span><br/>
                    <TypingAnimation text={"현실에 꿈을 선물하는 개발자"} speed={75} delay={750}/><br/>
                    <span className="animate__animated animate__fadeIn animate__delay-4s">전윤민입니다.</span>
                </h1>
            </section>

            <section className="container py-5">
                <header className="text-center mb-5">
                    <h3 className="fw-bold">🙄 자기소개</h3>
                </header>

                <div id="values-container" className="d-grid m-auto mb-5">
                    <div className="value-item text-center">
                        <Hexagon className="mb-4"/>
                        <h5>반응성</h5>
                        <p className="text-muted">Reactivity</p>
                    </div>
                    <div className="value-item text-center">
                        <Hexagon className="mb-4"/>
                        <h5>융통성</h5>
                        <p className="text-muted">Flexibility</p>
                    </div>
                    <div className="value-item text-center">
                        <Hexagon className="mb-4"/>
                        <h5>범용성</h5>
                        <p className="text-muted">Universality</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <img src={Profile} alt="Profile" className="img-fluid shadow-sm br-2 mb-3"
                                 style={{maxWidth: 300}}/>
                            <h5 className="fw-bold">전윤민 (22)</h5>
                            <p className="text-muted">풀스택 웹 개발자 / 쥬니어 게임 개발자</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ul className="nav nav-pills justify-content-center mb-3">
                            <li className="nav-item">
                                <div className="nav-link pointer active">All</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link pointer">Web</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link pointer">Game</div>
                            </li>
                        </ul>
                        {skillData.map((value, index) => <SkillBar key={index} {...value} className="mb-3"/>)}
                    </div>
                </div>
            </section>

            <section className="container py-5">
                <header className="text-center mb-5">
                    <h3 className="fw-bold">📜 주요 경력</h3>
                </header>

                <div className="d-flex justify-content-center">
                    <ul style={{lineHeight: 2}}>
                        <li><b>한국디지털미디어고등학교</b> 웹 프로그래밍과 졸업</li>
                        <li><b>경희대학교</b> 소프트웨어융합학과 재학</li>
                        <li><b>공감 웹 개발팀</b> (2019.01.21. ~ 2020.02.29.)</li>
                        <li><b>Diffense 웹 개발팀</b> (2020.03.31. ~ 2020.12.31.)</li>
                        <li className="text-muted"><span className="me-3">And Next...?</span>(<Clock/> ~ )</li>
                    </ul>
                </div>
            </section>

            <section className="container py-5">
                <header className="text-center mb-5">
                    <h3 className="fw-bold">📚 포트폴리오</h3>
                </header>

                <div className="row mb-5">
                    <div className="col-md-6 offset-md-3">
                        <div id="icon-container" className="d-grid">
                            {projectIconData.map((value, index) => <Icon key={index} {...value}/>)}
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-lg-4 col-sm-6">
                        {projectData.map((value, index) => <ProjectCard key={index} {...value}/>)}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;