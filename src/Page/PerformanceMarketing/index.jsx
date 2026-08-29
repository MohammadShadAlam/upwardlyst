"use client";

import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import NewsletterSection from "../../Components/Form/Newsletter";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import FaqSection from "../../Components/FAQs/faq";
// YAHAN IMPORT CHANGE KIYA HAI
import PerformanceMarketingSection from "../../Components/Services/PerformanceMarketingSection"; 

function PerformanceMarketingPage(){
    return(
        <>
            <HeadTitle title="Performance Marketing - Dark Metrix - Digital Marketing Agency" />
            <BannerInnerSection title="Performance Marketing" currentPage="Services Details" />
            
            {/* YAHAN COMPONENT CHANGE KIYA HAI */}
            <PerformanceMarketingSection /> 
            
            <TestimonialSection />
            <NewsletterSection />
            <FaqSection />
        </>
    );
}

export default PerformanceMarketingPage;