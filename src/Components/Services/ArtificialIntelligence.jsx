import React from "react";
import { services } from "../../Data/ServiceData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const ArtificialIntelligenceSection = () => {
    return (
        <div className="section pb-0">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-5">
                    <div className="image-container">
                        <img
                        src="/assets/images/dummy-img-600x400.jpg"
                        alt="Artificial Intelligence Service"
                        className="single-service-img"
                        />
                        <div className="single-service-title-layout">
                            <div>
                                <div className="single-service-spacer"></div>
                                <div className="single-service-title-wrapper">
                                    <div className="single-service-title">
                                        <AnimateOnScroll animation="fadeInRight" speed="slow">
                                            <div className="sub-heading">
                                                <i className="fa-regular fa-circle-dot"></i>
                                                <span>Our Expertise</span>
                                            </div>
                                        </AnimateOnScroll>
                                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                                            <h3 className="title-heading">
                                                Transform Your Business with Advanced AI Solutions
                                            </h3>
                                        </AnimateOnScroll>
                                        <p>
                                            Automate processes, gain actionable data insights, and drive innovation with cutting-edge Artificial Intelligence tailored for your business growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="single-service-spacer"></div>
                        </div>
                    </div>

                    <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5">
                        <div className="col col-lg-8">
                            <div className="d-flex flex-column gspace-2">
                                <h4>Overview</h4>
                                <p>
                                    At Dark Metrix, we harness the power of Artificial Intelligence to solve complex business challenges. We build intelligent systems designed to optimize your workflows and enhance customer experiences. From machine learning models and predictive analytics to natural language processing and smart automation, we provide end-to-end AI solutions.
<br/><br/>Our AI strategies not only streamline your daily operations but also give your business a strong competitive edge, helping you make data-driven decisions with high accuracy.
                                </p>
                                <div className="row row-cols-md-2 row-cols-1 grid-spacer-2 grid-spacer-md-3">
                                    <div className="col">
                                        <div className="image-container">
                                        <img src="/assets/images/dummy-img-600x400.jpg" alt="AI Service Image 1" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="image-container">
                                        <img src="/assets/images/dummy-img-600x400.jpg" alt="AI Service Image 2" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>

                                <div className="card service-included">
                                    <h4>What's Included</h4>
                                    <div className="underline-accent-short"></div>
                                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                                        <div className="col">
                                            <ul className="check-list">
                                                <li>AI Strategy & Consulting</li>
                                                <li>Machine Learning Models</li>
                                                <li>Predictive Data Analytics</li>
                                                <li>Business Process Automation</li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <ul className="check-list">
                                                <li>Natural Language Processing (NLP)</li>
                                                <li>Custom AI App Development</li>
                                                <li>Chatbots & Virtual Assistants</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4">
                            <div className="d-flex flex-column flex-md-row flex-lg-column justify-content-between gspace-5">
                                <div className="card service-recent">
                                <h4>Recent Services</h4>
                                <div className="underline-accent-short"></div>
                                <ul className="single-service-list">
                                    {services.map((service) => (
                                        <li key={service.id}>
                                        <a href={service.link} className="hover:underline">{service.title}</a>
                                        </li>
                                    ))}
                                </ul>
                                </div>
                                <div className="cta-service-banner">
                                    <div className="spacer"></div>
                                    <h3 className="title-heading">Ready to Innovate with AI?</h3>
                                    <div className="link-wrapper">
                                        <a href="/contact">Contact Us</a>
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtificialIntelligenceSection;