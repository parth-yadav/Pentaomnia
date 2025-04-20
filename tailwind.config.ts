import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/theme";

const config = {
    prefix: "",
    darkMode: ["class"],
    content: [
        "./src/**/*.{ts,tsx}",
        "./node_modules/@nextui-org/theme/dist/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            height: {
                "10vh": "10vh",
                "20vh": "20vh",
                "30vh": "30vh",
                "40vh": "40vh",
                "50vh": "50vh",
                "60vh": "60vh",
                "70vh": "70vh",
                "80vh": "80vh",
                "90vh": "90vh",
                "100vh": "100vh",
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
               
                

                // C1E6F3 1E3970 FCB817
                // hsl(196, 68%, 85%)
                // hsl(220, 58%, 28%)
                // hsl(42, 97%, 54%)
                primary: {
                    DEFAULT: "hsl(220, 58%, 28%)",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(196, 68%, 85%)",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(42, 97%, 54%)",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                 slowping: 'ping 3s cubic-bezier(0, 0, 0.05, 1) infinite', // Custom slower ping
      
            },
             fontFamily: {
                 inter: ['var(--font-inter)'],
                  poppins: ['var(--font-poppins)'],
        playfair: ['var(--font-playfair)'],
      },
        },
    },
    plugins: [nextui(), require("tailwindcss-animate")],
} satisfies Config;

export default config;
