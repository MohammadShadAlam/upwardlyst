import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

function ExpertiseSection(){

    return(
        <>
           <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column flex-lg-row gspace-5">
                        <div className="expertise-img-layout">
                            <div className="image-container expertise-img">
                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <img
                                        src="/assets/images/download (6).jpg"
                                        alt="Expertise Image"
                                        className="img-fluid"
                                    />
                                </AnimateOnScroll>
                                <div className="expertise-layout">
                                    <div className="d-flex flex-column">
                                        <div className="card-expertise-wrapper">
                                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                                <div className="card card-expertise">
                                                    <h4>Ready to Elevate Your Digital Presence?</h4>
                                                    <p>Let's create a custom strategy that fits your business goals.</p>
                                                    <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                                                        <a href="./contact">Get Free Consultation</a>
                                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                                    </div>
                                                </div>
                                            </AnimateOnScroll>
                                        </div>
                                    <div className="expertise-spacer"></div>
                                        </div>
                                    <div className="expertise-spacer"></div>
                                </div>
                            </div>
                        </div>
                        <div className="expertise-title">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div className="sub-heading">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>Our Expertise</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="title-heading">
                                    Turning Customer Intent Into Growth.
                                </h2>
                            </AnimateOnScroll>
                            <p>At Dark Metrix, we connect SEO, performance marketing, paid media and digital experiences to help businesses reach high-intent customers, generate qualified leads and grow consistently.
                              

                            </p>
                            <div className="d-flex flex-column flex-md-row gspace-2">
                                <div className="expertise-list">
                                    <h5>What We Do Best</h5>
                                    <ul className="check-list">
                                        <li><a href="./performance-marketing">Performance Marketing</a></li>
                                        <li><a href="./seo">Search Engine Optimization</a></li>
                                        <li><a href="./ppc-advertising">PPC Advertising</a></li>
                                        <li><a href="./single_services">Social Media Marketing</a></li>
                                        <li><a href="./content-marketing">Content Marketing</a></li>
                                        <li><a href="./web-app-development">Web & App Development</a></li>
                                    </ul>
                                </div>

                                <AnimateOnScroll animation="fadeInUp">
                                    <div className="card card-expertise card-expertise-counter animate-box">
                                        <div className="d-flex flex-row gspace-2 align-items-center">
                                            <div className="d-flex flex-row align-items-center">
                                            <CounterOnScroll
                                                target={10}
                                                suffix="+"
                                                counterClassName="counter"
                                                suffixClassName="counter-detail"
                                            />
                                            </div>
                                            <h6>Years of Experience in Digital Marketing Services</h6>
                                        </div>
                                        <p>
                                            A decade of experience helping businesses grow through digital marketing and web & app development.
                                        </p>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ExpertiseSection;