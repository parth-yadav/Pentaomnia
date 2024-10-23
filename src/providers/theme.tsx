"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

import EStorageKeys from "@/constants/keys";

export default function ThemeProvider({ children, ...properties }: ThemeProviderProps) {
    return (
        <NextThemesProvider
            attribute='class'
            defaultTheme='light'
            storageKey={EStorageKeys.theme}
            disableTransitionOnChange
            enableSystem
            {...properties}
        >
            {children}
        </NextThemesProvider>
    );
}
