"use client";

import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import NewsletterSection from "../../Components/Form/Newsletter";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import FaqSection from "../../Components/FAQs/faq";
import WebAppDevSection from "../../Components/Services/WebAppDevSection";

function WebAppDevelopmentPage(){
    return(
        <>
            <HeadTitle title="Web & App Development - Marko" />
            <BannerInnerSection title="Web & App Development" currentPage="Services Details" />
            <WebAppDevSection />
            <TestimonialSection />
            <NewsletterSection />
            <FaqSection />
        </>
    );
}

export default WebAppDevelopmentPage;