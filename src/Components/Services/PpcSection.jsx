import React from "react";
import { services } from "../../Data/ServiceData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const PpcSection = () => {
    return (
        <div className="section pb-0">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-5">
                    <div className="image-container">
                        <img
                        src="/assets/images/dummy-img-600x400.jpg"
                        alt="PPC Advertising Service"
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
                                                Maximize ROI with Targeted PPC Campaigns
                                            </h3>
                                        </AnimateOnScroll>
                                        <p>
                                            Get instant visibility and drive high-intent traffic to your website with expertly managed Pay-Per-Click advertising campaigns across Google, Bing, and Social Media.
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
                                    At Darkmetrix, we ensure every click counts. Our PPC strategies are designed to lower your Cost Per Acquisition (CPA) while maximizing conversions. We handle everything from keyword research and ad copywriting to bid management and A/B testing.
<br/>Stop wasting money on ad spend that doesn't convert. Let our experts optimize your campaigns to target the right audience at the exact moment they are searching for your products or services.
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
                                                <li>Google Ads (Search, Display, Shopping)</li>
                                                <li>Keyword Research & Optimization</li>
                                                <li>Ad Copy Creation & Testing</li>
                                                <li>Landing Page Consultation</li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <ul className="check-list">
                                                <li>Bid Management & Scaling</li>
                                                <li>Remarketing Campaigns</li>
                                                <li>Conversion Tracking Setup</li>
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
                                    <h3 className="title-heading">Transform Your Business!</h3>
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

export default PpcSection;