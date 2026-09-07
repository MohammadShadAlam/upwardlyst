import React from "react";
import { services } from "../../Data/ServiceData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const PerformanceMarketingSection = () => {
    return (
        <div className="section pb-0">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-5">
                    <div className="image-container">
                        <img
                        src="/assets/images/dummy-img-600x400.jpg"
                        alt="Performance Marketing Service"
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
                                                Turn Every Marketing Move Into Measurable Growth
                                            </h3>
                                        </AnimateOnScroll>
                                        <p>
                                           Reach the right customers, generate qualified leads and scale what works with performance marketing built around data, conversions and real business outcomes.
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
                                   Darkmetrix provides performance marketing services designed to turn advertising spend into measurable business growth. We combine paid media, audience targeting, creative testing, conversion optimization and analytics to help businesses acquire customers more efficiently.
<br/>From generating qualified leads to increasing online sales, every campaign is continuously measured and optimized around the results that matter to your business.
                                </p>
                                <div className="row row-cols-md-2 row-cols-1 grid-spacer-2 grid-spacer-md-3">
                                    <div className="col">
                                        <div className="image-container">
                                        <img
                                            src="/assets/images/dummy-img-600x400.jpg"
                                            alt="Service Image"
                                            className="img-fluid"
                                        />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="image-container">
                                        <img
                                            src="/assets/images/dummy-img-600x400.jpg"
                                            alt="Service Image"
                                            className="img-fluid"
                                        />
                                        </div>
                                    </div>
                                </div>

                                <div className="card service-included">
                                    <h4>What's Included</h4>
                                    <div className="underline-accent-short"></div>
                                    <p>
                                       Our performance marketing services connect strategy, advertising, creative and analytics to help you acquire customers, improve conversions and scale profitable campaigns.
                                    </p>
                                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                                        <div className="col">
                                            <ul className="check-list">
                                               <li><a href="./performance-marketing">Performance Marketing</a></li>
                                        <li><a href="./seo">Search Engine Optimization</a></li>
                                        <li><a href="./ppc-advertising">PPC Advertising</a></li>
                                       <li><a href="./single_services">Social Media Marketing</a></li>
                                    <li><a href="./content-marketing">Content Marketing</a></li>
                                        <li><a href="./web-app-development">Web & App Development</a></li>
                                      </ul>
                                    </div>
                                    <div className="about-list">
                                      <ul className="check-list">
                                        
                                        <li><a href="./content-marketing">Content Marketing</a></li>
                                        <li><a href="./web-app-development">Web & App Development</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h4>Why Choose Dark Metrix for Performance Marketing?</h4>
                                <p>
                                    We don't optimize campaigns for clicks alone. Every decision is guided by customer intent, conversion data and the business outcomes your marketing needs to deliver.
                                </p>

                                <div className="row row-cols-2">
                                    <div className="col">
                                        <div className="d-flex flex-column gspace-2">
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>Intent-Driven Targeting</h5>
                                                    <p>Reach people most likely to become customers.</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>Conversion-Focused Campaigns</h5>
                                                    <p>Turn qualified traffic into leads and sales.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex flex-column gspace-2">
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>Continuous Optimization</h5>
                                                    <p>Optimize campaigns for better results.</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>Transparent Performance</h5>
                                                    <p>Track spend, conversions and ROAS.</p>
                                                </div>
                                            </div>
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
                                        <a href={service.link} className="hover:underline">
                                            {service.title}
                                        </a>
                                        </li>
                                    ))}
                                </ul>
                                </div>
                                <div className="cta-service-banner">
                                    <div className="spacer"></div>
                                    <h3 className="title-heading">Transform Your Business with Marko!</h3>
                                    <p>
                                        Take your digital marketing to the next level with data-driven strategies and innovative solutions. Let's create something amazing together!
                                    </p>
                                    <div className="link-wrapper">
                                        <a href="about">Read More</a>
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

export default PerformanceMarketingSection;