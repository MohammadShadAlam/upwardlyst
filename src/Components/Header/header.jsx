"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "../Theme/themeswitch";
import { useNav } from "../Context/NavContext";

function Navbar() {
const { isDropdownActive } = useNav();
const pathname = usePathname();

const isActive = (path, end = false) => {
    if (end) return pathname === path;
    return pathname === path || (path !== "/" && pathname?.startsWith(path + "/"));
};

const navClass = (path, base = "nav-link", end = false) =>
    `${base}${isActive(path, end) ? " active" : ""}`;

return (
    <div className="navbar-wrapper">
        <nav className="navbar navbar-expand-lg">
            <div className="navbar-container">
                <div className="logo-container">
                    <Link className="navbar-brand" href="/">
                    <img
                        src="/assets/images/marko-logo.png"
                        className="site-logo img-fluid"
                        alt="Logo"
                    />
                    </Link>
                </div>

                <button
                    className="navbar-toggler nav-btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fa-solid fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link href="/" className={navClass("/", "nav-link", true)}>
                            Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/about" className={navClass("/about")}>
                            About
                            </Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                            className={`nav-link dropdown-toggle ${
                                isDropdownActive(["/service", "/single_services"])
                                ? "active"
                                : ""
                            }`}
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            Services <i className="fa-solid fa-angle-down accent-color"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link href="/service" className={navClass("/service", "dropdown-item")}>
                                        Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/single_services" className={navClass("/single_services", "dropdown-item")}>
                                        Single Services
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                            className={`nav-link dropdown-toggle ${
                                isDropdownActive([
                                "/case_studies",
                                "/team",
                                "/partnership",
                                "/pricing",
                                "/testimonial",
                                "/faq",
                                "/404_page",
                                ])
                                ? "active"
                                : ""
                            }`}
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            Pages <i className="fa-solid fa-angle-down accent-color"></i>
                            </a>
                            <ul className="dropdown-menu">
                            <li>
                                <Link href="/case_studies" className={navClass("/case_studies", "dropdown-item")}>
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className={navClass("/team", "dropdown-item")}>
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/partnership" className={navClass("/partnership", "dropdown-item")}>
                                    Partnership
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className={navClass("/pricing", "dropdown-item")}>
                                    Pricing Plan
                                </Link>
                            </li>
                            <li>
                                <Link href="/testimonial" className={navClass("/testimonial", "dropdown-item")}>
                                    Testimonial
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className={navClass("/faq", "dropdown-item")}>
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="/404_page" className={navClass("/404_page", "dropdown-item")}>
                                    Error 404
                                </Link>
                            </li>
                            </ul>
                        </li>

                        {/* Archive Dropdown */}
                        <li className="nav-item dropdown">
                            <a
                            className={`nav-link dropdown-toggle ${
                                isDropdownActive(["/blog", "/single_post"]) ? "active" : ""
                            }`}
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            Archive <i className="fa-solid fa-angle-down accent-color"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link href="/blog" className={navClass("/blog", "dropdown-item")}>
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/single_post" className={navClass("/single_post", "dropdown-item")}>
                                        Single Post
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link href="/contact" className={navClass("/contact")}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Navbar Action */}
                <div className="navbar-action-container">
                    <div className="navbar-action-button">
                        <ThemeSwitcher />
                    </div>
                    <div className="navbar-icon-wrapper">
                        <div className="icon-circle">
                            <i className="fa-solid fa-phone-volume"></i>
                        </div>
                        <h6>+1 (62) 987 7543</h6>
                    </div>
                </div>
            </div>
        </nav>
    </div>
);
}

export default Navbar;
