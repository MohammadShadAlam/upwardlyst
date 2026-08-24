"use client";

import React, { createContext, useContext } from "react";
import { usePathname } from "next/navigation";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const pathname = usePathname();

    const isDropdownActive = (paths = []) => paths.includes(pathname);

    const value = { pathname, isDropdownActive };

    return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export const useNav = () => useContext(NavContext);
