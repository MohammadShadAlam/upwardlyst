"use client";

import React, { useEffect, useRef } from "react";

function Sidebar() {
    const overlayRef = useRef(null);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const menuBtn = document.querySelector(".nav-btn");
        const closeBtn = sidebarRef.current?.querySelector(".close-btn");
        const overlay = overlayRef.current;
        const sidebar = sidebarRef.current;

        function openSidebar() {
        overlay.classList.add("active");
        setTimeout(() => {
            sidebar.classList.add("active");
        }, 200);
        }

        function closeSidebar() {
        sidebar.classList.remove("active");
        setTimeout(() => {
            overlay.classList.remove("active");
        }, 200);
        }

        menuBtn?.addEventListener("click", openSidebar);
        closeBtn?.addEventListener("click", closeSidebar);
        overlay?.addEventListener("click", closeSidebar);

        return () => {
        menuBtn?.removeEventListener("click", openSidebar);
        closeBtn?.removeEventListener("click", closeSidebar);
        overlay?.removeEventListener("click", closeSidebar);
        };
    }, []);

    useEffect(() => {
        const dropdownBtns = sidebarRef.current?.querySelectorAll(".sidebar-dropdown-btn");

        function handleDropdownClick(e) {
        const btn = e.currentTarget;
        const dropdownMenu = btn.parentElement.nextElementSibling;
        const isOpen = dropdownMenu.classList.contains("active");

        sidebarRef.current
            .querySelectorAll(".sidebar-dropdown-menu")
            .forEach(menu => {
            menu.classList.remove("active");
            });

        if (!isOpen) dropdownMenu.classList.add("active");
        }

        dropdownBtns?.forEach(btn => {
        btn.addEventListener("click", handleDropdownClick);
        });

        return () => {
        dropdownBtns?.forEach(btn => {
            btn.removeEventListener("click", handleDropdownClick);
        });
        };
    }, []);

    return (
        <div>
        <div ref={overlayRef} className="sidebar-overlay"></div>
        <div ref={sidebarRef} className="sidebar">
            <div className="sidebar-header">
                <div className="logo">
                    <img src="/assets/images/upwardlyst logo-dark-theme2.png" className="site-logo img-fluid logo" alt="Logo" />
                </div>
                <button className="close-btn"><span>X</span></button>
            </div>
            <ul className="menu">
                <li><a href="/">Home</a></li>
                {/* Desktop ke hisaab se About Us ko About kar diya hai */}
                <li><a href="/about">About</a></li>
                
                <li className="sidebar-dropdown">
                    <div className="dropdown-header">
                        <a href="#">Services</a>
                    <button className="sidebar-dropdown-btn">
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                    </div>
                    <ul className="sidebar-dropdown-menu">
                        <li><a href="/performance-marketing">Performance Marketing</a></li>
                        <li><a href="/seo">Search Engine Optimization</a></li>
                        <li><a href="/ppc-advertising">PPC Advertising</a></li>
                        <li><a href="/single_services">Social Media Marketing</a></li>
                        <li><a href="/content-marketing">Content Marketing</a></li>
                        <li><a href="/web-app-development">Web & App Development</a></li>
                    </ul>
                </li>

                {/* Yahan se Pages aur Archive hata kar sirf Blog add kar diya hai */}
                <li><a href="/blog">Blog</a></li>
                
                <li className="below-dropdown"><a href="/contact">Contact Us</a></li>
            </ul>
        </div>
        </div>
    );
}

export default Sidebar;