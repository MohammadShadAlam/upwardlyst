import React from "react";
import { services } from "../../Data/ServiceData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const ContentMarketingSection = () => {
    return (
        <div className="section pb-0">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-5">
                    <div className="image-container">
                        <img
                        src="/assets/images/dummy-img-600x400.jpg"
                        alt="Content Marketing Service"
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
                                                Engage Your Audience with Compelling Content
                                            </h3>
                                        </AnimateOnScroll>
                                        <p>
                                            Tell your brand's story, build trust, and drive conversions with high-quality, SEO-optimized content tailored to your target audience.
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
                                    At Darkmetrix, we believe that content is the voice of your brand. We create strategic, valuable, and relevant content designed to attract and retain a clearly defined audience. From engaging blog posts and website copy to informative whitepapers and video scripts, we do it all.
<br/>Our content marketing strategies not only boost your SEO rankings but also establish your brand as an industry authority, ultimately driving profitable customer action.
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
                                                <li>Content Strategy & Planning</li>
                                                <li>Blog & Article Writing</li>
                                                <li>SEO Copywriting</li>
                                                <li>Website Content Revamp</li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <ul className="check-list">
                                                <li>Email Newsletters</li>
                                                <li>Video Scripts & Storyboarding</li>
                                                <li>E-books & Whitepapers</li>
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
                                    <h3 className="title-heading">Ready to Tell Your Story?</h3>
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

export default ContentMarketingSection;