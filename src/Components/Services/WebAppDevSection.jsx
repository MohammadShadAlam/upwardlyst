import React from "react";
import { services } from "../../Data/ServiceData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const WebAppDevSection = () => {
    return (
        <div className="section pb-0">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-5">
                    <div className="image-container">
                        <img
                        src="/assets/images/dummy-img-600x400.jpg"
                        alt="Web and App Development Service"
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
                                                Build Scalable & High-Performance Digital Solutions
                                            </h3>
                                        </AnimateOnScroll>
                                        <p>
                                            Empower your business with custom websites and mobile applications that deliver seamless user experiences and drive sustainable growth.
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
                                    At Darkmetrix, we specialize in creating responsive, secure, and feature-rich websites and applications. Whether you need a robust e-commerce platform, a dynamic corporate website, or a custom mobile app for iOS and Android, our development team brings your vision to life using the latest technologies.
<br/>We focus on writing clean code and designing intuitive interfaces to ensure your digital presence is not only visually stunning but also fast and functional.
                                </p>
                                <div className="row row-cols-md-2 row-cols-1 grid-spacer-2 grid-spacer-md-3">
                                    <div className="col">
                                        <div className="image-container">
                                        <img src="/assets/images/dummy-img-600x400.jpg" alt="Service Image" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="image-container">
                                        <img src="/assets/images/dummy-img-600x400.jpg" alt="Service Image" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>

                                <div className="card service-included">
                                    <h4>What's Included</h4>
                                    <div className="underline-accent-short"></div>
                                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                                        <div className="col">
                                            <ul className="check-list">
                                                <li>Custom Website Development</li>
                                                <li>E-commerce Solutions (Shopify, etc.)</li>
                                                <li>iOS & Android App Development</li>
                                                <li>UI/UX Design & Prototyping</li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <ul className="check-list">
                                                <li>Web Application Development</li>
                                                <li>Website Maintenance & Support</li>
                                                <li>API Integration</li>
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
                                    <h3 className="title-heading">Ready to Build Something Great?</h3>
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

export default WebAppDevSection;