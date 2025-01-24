import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          jade: {
            DEFAULT: "#00a676",
            100: "#002218",
            200: "#004330",
            300: "#006548",
            400: "#008760",
            500: "#00a676",
            600: "#00edaa",
            700: "#32ffc5",
            800: "#76ffd8",
            900: "#bbffec",
          },
          blood_red: {
            DEFAULT: "#68130b",
            100: "#150402",
            200: "#2a0804",
            300: "#400b07",
            400: "#550f09",
            500: "#68130b",
            600: "#b12013",
            700: "#e93a2a",
            800: "#f07b71",
            900: "#f8bdb8",
          },
          sunset: {
            DEFAULT: "#fed19c",
            100: "#512b01",
            200: "#a25702",
            300: "#f28202",
            400: "#fda949",
            500: "#fed19c",
            600: "#fed9ae",
            700: "#fee2c2",
            800: "#ffecd7",
            900: "#fff5eb",
          },
          alloy_orange: {
            DEFAULT: "#c36600",
            100: "#271400",
            200: "#4e2800",
            300: "#743c00",
            400: "#9b5000",
            500: "#c36600",
            600: "#ff8502",
            700: "#ffa341",
            800: "#ffc281",
            900: "#ffe0c0",
          },
          night: {
            DEFAULT: "#100f0d",
            100: "#030303",
            200: "#070606",
            300: "#0a0908",
            400: "#0d0d0b",
            500: "#100f0d",
            600: "#464139",
            700: "#7a7364",
            800: "#a9a296",
            900: "#d4d1ca",
          },
          polynesian_blue: {
            DEFAULT: "#064789",
            100: "#010e1b",
            200: "#021d37",
            300: "#032b52",
            400: "#05396e",
            500: "#064789",
            600: "#096cd0",
            700: "#2b91f6",
            800: "#72b6f9",
            900: "#b8dafc",
          },
        },

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        hide: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        accordionOpen: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        accordionClose: {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: "0px" },
        },
        dialogOverlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        dialogContentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -45%) scale(0.95)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        drawerSlideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(100%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        drawerSlideRightAndFade: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(100%)" },
        },
      },
    },
  },
  animation: {
    hide: "hide 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    slideDownAndFade: "slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    slideLeftAndFade: "slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    slideUpAndFade: "slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    slideRightAndFade: "slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    // Accordion
    accordionOpen: "accordionOpen 150ms cubic-bezier(0.87, 0, 0.13, 1)",
    accordionClose: "accordionClose 150ms cubic-bezier(0.87, 0, 0.13, 1)",
    // Dialog
    dialogOverlayShow: "dialogOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    dialogContentShow: "dialogContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    // Drawer
    drawerSlideLeftAndFade:
      "drawerSlideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    drawerSlideRightAndFade: "drawerSlideRightAndFade 150ms ease-in",
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
} satisfies Config;
