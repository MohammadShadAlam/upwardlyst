import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function AboutSection(){

    return(
        <div className="section">
            <div className="hero-container">
                <div className="d-flex flex-column flex-lg-row gspace-5">
                    <div className="about-img-layout">
                        <div className="image-container about-img">
                            <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <img
                                src="/assets/images/dummy-img-600x400.jpg"
                                alt="About Us Image"
                                className="img-fluid"
                            />
                            </AnimateOnScroll>
                        
                            <div className="about-layout">
                                <div className="d-flex flex-column">
                                    <div className="card-about-wrapper">
                                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                                            <div
                                                className="card card-about"
                                                >
                                                <div className="d-flex flex-row align-items-center">
                                                    <span className="counter" data-target="21"></span>
                                                    <span className="counter-detail">10+</span>
                                                </div>
                                                <h6>Years of Experience on Digital Marketing Services</h6>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                <div className="about-spacer"></div>
                                </div>
                                <div className="about-spacer"></div>
                            </div>
                        </div>
                    </div>
                    <div className="about-title">
                        <div className="d-flex flex-column gspace-2">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div
                                    className="sub-heading"
                                >
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>About Us</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="title-heading">Built Around Intent, Driven by Growth.</h2>
                            </AnimateOnScroll>

                            <p>
                               Dark Metrix is a digital marketing agency helping businesses turn customer intent into measurable growth through SEO, performance marketing, paid media, content and digital experiences.
                            </p>
                            <p>
                              We combine global experience, creative thinking and performance data to help brands get found, reach the right customers and grow with confidence.
                            </p>

                            <div className="d-flex flex-column flex-md-row gspace-1 gspace-md-5">
                                <div className="about-list">
                                    <ul className="check-list">
                                        <li><a href="./single_services">PPC & Paid Ads</a></li>
                                        <li><a href="./single_services">Brand Strategy</a></li>
                                        <li><a href="./single_services">Conversion Optimization</a></li>
                                    </ul>
                                </div>

                                <div className="about-list">
                                    <ul className="check-list">
                                        <li><a href="./single_services">Performance Marketing</a></li>
                                        <li><a href="./single_services">Social Media Growth</a></li>
                                        <li><a href="./single_services">Content Marketing</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>

    );
}

export default AboutSection;