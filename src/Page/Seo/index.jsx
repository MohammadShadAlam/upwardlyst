"use client";

import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import NewsletterSection from "../../Components/Form/Newsletter";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import FaqSection from "../../Components/FAQs/faq";
import SeoSection from "../../Components/Services/SeoSection"; // Naya import

function SeoPage(){
    return(
        <>
            <HeadTitle title="Search Engine Optimization - Marko" />
            <BannerInnerSection title="Search Engine Optimization" currentPage="Services Details" />
            <SeoSection />
            <TestimonialSection />
            <NewsletterSection />
            <FaqSection />
        </>
    );
}

export default SeoPage;