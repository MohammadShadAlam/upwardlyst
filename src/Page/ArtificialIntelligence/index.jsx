"use client";

import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import NewsletterSection from "../../Components/Form/Newsletter";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import FaqSection from "../../Components/FAQs/faq";

// Naya component yahan import kiya hai
import ArtificialIntelligenceSection from "../../Components/Services/ArtificialIntelligenceSection"; 

function ArtificialIntelligencePage(){
    return(
        <>
            <HeadTitle title="Artificial Intelligence - Dark Metrix - Digital Marketing Agency" />
            <BannerInnerSection title="Artificial Intelligence" currentPage="Services Details" />
            
            {/* Ye raha aapka same-to-same service design */}
            <ArtificialIntelligenceSection /> 
            
            <TestimonialSection />
            <NewsletterSection />
            <FaqSection />
        </>
    );
}

export default ArtificialIntelligencePage;