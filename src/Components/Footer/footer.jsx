import React from "react";

const Footer = () => {
  return (
    <div className="section-footer">
        <div className="bg-footer-wrapper">
            <div className="bg-footer">
                <div className="hero-container position-relative z-2">
                    <div className="d-flex flex-column gspace-2">
                        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 grid-spacer-5">
                            <div className="col col-lg-4">
                                <div className="footer-logo-container">
                                    <div className="logo-container-footer">
                                    <img src="/assets/images/upwardlyst logo-dark-theme2.png" alt="Logo" className="site-logo img-fluid" />
                                    </div>
                                    <h4>Turning Digital Intent Into Growth</h4>
                                    <p>
                                    Dark Metrix helps businesses grow through SEO, performance marketing, paid advertising, social media and conversion-focused digital experiences.
                                    </p>
                                </div>
                            </div>

                            <div className="col col-lg-2">
                                <div className="footer-quick-links">
                                    <h5>Quick Links</h5>
                                    <ul className="footer-list">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About Us</a></li>
                                        <li><a href="/service">Services</a></li>
                                        <li><a href="/case_studies">Case Studies</a></li>
                                        <li><a href="/blog">Blog</a></li>
                                        <li><a href="/contact">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col col-lg-3">
                                <div className="footer-services-container">
                                    <h5>Services</h5>
                                    <ul className="footer-list">
                                        <li><a href="/single_services">SEO</a></li>
                                        <li><a href="/single_services">Content Marketing</a></li>
                                        <li><a href="/single_services">PPC Advertising</a></li>
                                        <li><a href="/single_services">Performance Marketing</a></li>
                                        <li><a href="/single_services">WhatsApp Marketing</a></li>
                                        <li><a href="/single_services">LinkedIn Marketing</a></li>
                                        <li><a href="/single_services">Email Marketing</a></li>
                                        <li><a href="/single_services">Social Media Marketing</a></li>
                                        <li><a href="/single_services">Web & App Development</a></li>
                                        <li><a href="/single_services">Branding & Design</a></li>
                                        
                                    </ul>
                                </div>
                            </div>

                            <div className="col col-lg-3">
                                <div className="footer-contact-container">
                                    <h5>Contact Info</h5>
                                    <ul className="contact-list">
                                        <li>darkmetrix@gmail.com</li>
                                        <li>+91 9920726697</li>
                                        <li>JTC, Frazer Road, Patna</li>
                                    </ul>
                                    <div className="d-flex flex-column gspace-1">
                                        <h5>Social Media</h5>
                                        <div className="social-container">
                                            <div className="social-item-wrapper">
                                                <a href="https://facebook.com" className="social-item">
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                            </div>
                                            <div className="social-item-wrapper">
                                                <a href="https://youtube.com" className="social-item">
                                                    <i className="fa-brands fa-youtube"></i>
                                                </a>
                                            </div>
                                            <div className="social-item-wrapper">
                                                <a href="https://instagram.com" className="social-item">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </div>
                                            <div className="social-item-wrapper">
                                                <a href="https://linkedin.com" className="social-item">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-content-spacer"></div>
                    </div>

                    <div className="copyright-container">
                        <span className="copyright">© 2026 Dark Metrix. Fox Creation All Rights Reserved.</span>
                        <div className="d-flex flex-row gspace-2">
                            <a href="#" className="legal-link">Terms of Service</a>
                            <a href="#" className="legal-link">Privacy Policy</a>
                        </div>
                    </div>

                    <div className="footer-spacer"></div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;