"use client";

import Navbar from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import Sidebar from "../Components/Sidebar/Sidebar";
import { ModalVideoProvider } from "../Components/Video/ModalVideoContext";
import { NavProvider } from "../Components/Context/NavContext";

// This mirrors the original src/App.jsx tree exactly:
// <Router><NavProvider><ModalVideoProvider><Navbar/><Sidebar/>{routed page}<Footer/></ModalVideoProvider></NavProvider></Router>
// Next.js's App Router replaces <Router>/<AppRouter>, so this component
// keeps the same provider + layout nesting around the routed page content.
export default function Providers({ children }) {
    return (
        <NavProvider>
            <ModalVideoProvider>
                <Navbar />
                <Sidebar />
                {children}
                <Footer />
            </ModalVideoProvider>
        </NavProvider>
    );
}
