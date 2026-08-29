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
                        src="/assets/images/upwardlyst logo-dark-theme2.png"
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

                        {/* 👇 Saare naye service routes yahan add kar diye hain taaki mobile/desktop par active state theek rahe 👇 */}
                        <li className="nav-item dropdown">
                            <a
                            className={`nav-link dropdown-toggle ${
                                isDropdownActive([
                                    "/service", 
                                    "/single_services", 
                                    "/performance-marketing", 
                                    "/seo", 
                                    "/ppc-advertising", 
                                    "/content-marketing", 
                                    "/web-app-development"
                                ])
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
                                <li><Link href="/performance-marketing" className="dropdown-item">Performance Marketing</Link></li>
                                <li><Link href="/seo" className="dropdown-item">Search Engine Optimization</Link></li>
                                <li><Link href="/ppc-advertising" className="dropdown-item">PPC Advertising</Link></li>
                                <li><Link href="/single_services" className="dropdown-item">Social Media Marketing</Link></li>
                                <li><Link href="/content-marketing" className="dropdown-item">Content Marketing</Link></li>
                                <li><Link href="/web-app-development" className="dropdown-item">Web & App Development</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link href="/blog" className={navClass("/blog")}>
                                Blog
                            </Link>
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
                        <h6>+91 9920726697</h6>
                    </div>
                </div>
            </div>
        </nav>
    </div>
);
}

export default Navbar;