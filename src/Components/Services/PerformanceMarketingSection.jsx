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
                                                Drive Measurable Results and Maximize ROI
                                            </h3>
                                        </AnimateOnScroll>
                                        <p>
                                            Scale your business with data-driven performance marketing strategies designed to generate high-quality leads, increase conversions, and optimize your ad spend.
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
                                    Darkmetrix helps businesses grow through performance marketing strategies built around audience intent, precise targeting, and measurable ROI. From Google Ads to programmatic advertising, we plan campaigns, manage budgets, and optimize performance to help your brand reach the right people at the right time.
<br/>Whether you want to lower your customer acquisition cost, generate high-intent leads, or scale an established brand, we turn clicks into meaningful business opportunities.
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
                                        Our performance marketing services combine strategy, advanced targeting, and continuous optimization to help your brand achieve the highest possible return on investment.
                                    </p>
                                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                                        <div className="col">
                                            <ul className="check-list">
                                                <li>Google Ads (Search, Display, Performance Max)</li>
                                                <li>Conversion Rate Optimization (CRO)</li>
                                                <li>Retargeting & Remarketing Campaigns</li>
                                                <li>Funnel Tracking & Optimization</li>
                                                <li>A/B Testing for Ad Creatives</li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <ul className="check-list">
                                                <li>ROI & CPA Tracking</li>
                                                <li>Programmatic Advertising</li>
                                                <li>Custom Dashboards & Reporting</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h4>Why Choose Dark Metrix for Performance Marketing?</h4>
                                <p>
                                    We go beyond basic ad placement. Every campaign is built around your specific revenue goals and backed by deep data analysis to ensure you get the best value for every dollar spent.
                                </p>

                                <div className="row row-cols-2">
                                    <div className="col">
                                        <div className="d-flex flex-column gspace-2">
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>Data-Driven Targeting</h5>
                                                    <p>Reaching high-intent users ready to convert.</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>Budget Optimization</h5>
                                                    <p>Maximizing ROI while lowering acquisition costs.</p>
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
                                                    <p>Campaigns optimized for actual revenue, not just clicks.</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>Transparent Reporting</h5>
                                                    <p>Clear insights on exactly how your budget is performing.</p>
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