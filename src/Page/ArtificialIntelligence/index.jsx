"use client";

import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import NewsletterSection from "../../Components/Form/Newsletter";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import FaqSection from "../../Components/FAQs/faq";



function ArtificialIntelligencePage(){
    return(
        <>
            <HeadTitle title="Artificial Intelligence - Dark Metrix - Digital Marketing Agency" />
            <BannerInnerSection title="Artificial Intelligence" currentPage="Services Details" />
            
            
            <div className="section" style={{ padding: '100px 0', textAlign: 'center', minHeight: '40vh' }}>
                <h2 className="title-heading" style={{ color: '#a855f7' }}>AI Solutions</h2>
                <p>Detailed content for Artificial Intelligence will be updated here.</p>
            </div>
            
            <TestimonialSection />
            <NewsletterSection />
            <FaqSection />
        </>
    );
}

export default ArtificialIntelligencePage;