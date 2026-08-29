"use client";

import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import NewsletterSection from "../../Components/Form/Newsletter";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import FaqSection from "../../Components/FAQs/faq";
import PpcSection from "../../Components/Services/PpcSection";

function PpcAdvertisingPage(){
    return(
        <>
            <HeadTitle title="PPC Advertising - Marko" />
            <BannerInnerSection title="PPC Advertising" currentPage="Services Details" />
            <PpcSection />
            <TestimonialSection />
            <NewsletterSection />
            <FaqSection />
        </>
    );
}

export default PpcAdvertisingPage;