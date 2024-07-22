'use client';

import React from 'react';
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";

const ClientSideProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        {children}
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
};

export default ClientSideProviders;