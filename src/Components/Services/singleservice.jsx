import React from "react";
import { services } from "../../Data/ServiceData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const SingleServiceSection = () => {
    return (
        <div className="section pb-0">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-5">
                    <div className="image-container">
                        <img
                        src="/assets/images/dummy-img-600x400.jpg"
                        alt="Service Image"
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
                                                Turn Social Attention Into Real Business Growth
                                            </h3>
                                        </AnimateOnScroll>
                                        <p>
                                            Build visibility, engage the right audience and generate demand with strategic social media marketing designed around your customers, brand and business goals.
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
                                    Darkmetrix helps businesses grow through social media marketing strategies built around audience intent, creative content and measurable performance. From Instagram and Facebook to LinkedIn and other relevant platforms, we plan content, manage paid campaigns and optimize performance to help your brand reach the right people.
<br/>Whether you want to build awareness, generate leads or scale an established brand, we turn social attention into meaningful business opportunities.
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
                                        Our social media marketing services combine strategy, content, advertising and performance insights to help your brand reach, engage and convert the right audience.
                                    </p>
                                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                                        <div className="col">
                                            <ul className="check-list">
                                                <li>Social Media Strategy & Planning</li>
                                                <li>Creative Content Production</li>
                                                <li>Meta Ads Management</li>
                                                <li>LinkedIn Ads Management</li>
                                                <li>email Marketing</li>
                                                <li>WhatsApp Marketing</li>
                                                <li>Audience & Community Engagement</li>
                                                <li>Performance Reporting & Analytics</li>
                                                <li>Campaign Creative & Testing</li>
                                                <li>Social Listening & Trend Analysis</li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <ul className="check-list">
                                                <li>Perfomance Reporting & Analytics</li>
                                                <li>Influencer Collaborations</li>
                                                <li>Social Listening & Trend Monitoring</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h4>Why Choose Dark Metrix for Social Media Marketing?</h4>
                                <p>
                                    We go beyond posting content. Every social media strategy is built around your audience, business goals and performance data to create measurable impact.
                                </p>

                                <div className="row row-cols-2">
                                    <div className="col">
                                        <div className="d-flex flex-column gspace-2">
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>Intent-Driven Strategy</h5>
                                                    <p>Built around your audience and business goals.</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>Creative That Connects</h5>
                                                    <p>Content designed to earn attention and action.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex flex-column gspace-2">
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>Performance Focused</h5>
                                                    <p>Campaigns optimized for leads and conversions.</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>Data-Led Decisions</h5>
                                                    <p>Clear insights guide every optimization.</p>
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

export default SingleServiceSection;