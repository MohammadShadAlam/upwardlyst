"use client";

import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import NewsletterSection from "../../Components/Form/Newsletter";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import FaqSection from "../../Components/FAQs/faq";
import ContentMarketingSection from "../../Components/Services/ContentMarketingSection";

function ContentMarketingPage(){
    return(
        <>
            <HeadTitle title="Content Marketing - Marko" />
            <BannerInnerSection title="Content Marketing" currentPage="Services Details" />
            <ContentMarketingSection />
            <TestimonialSection />
            <NewsletterSection />
            <FaqSection />
        </>
    );
}

export default ContentMarketingPage;