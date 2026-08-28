import React from "react";
import { services } from "../../Data/ServiceData";
import ServiceCard from "../Card/ServiceCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function ServiceSection(){

    return(
        <>
            <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column justify-content-center text-center gspace-5">
                        <div className="d-flex flex-column justify-content-center text-center gspace-2">
                            <AnimateOnScroll animation="fadeInDown" speed="normal">    
                                <div className="sub-heading align-self-center">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>Our Core Services</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <h2 className="title-heading heading-container heading-container-medium">
                                    Digital Marketing Built to Drive Real Growth.
                                </h2>
                            </AnimateOnScroll>
                        </div>
                        <div className="card-service-wrapper">
                            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 grid-spacer-2 justify-content-center">
                                {services.map((item) => (
                                    <div className="col" key={item.id}>
                                        <ServiceCard 
                                            icon={item.icon}
                                            title={item.title}
                                            content={item.content}
                                            speed={item.speed}
                                            link={item.link}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="service-link-footer">
                            <p>
                                Need a custom solution? Let&apos; build a digital strategy around your business goals.
                                <a href="./contact"> Get a Free Strategy Call</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServiceSection;