import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a",
                surface: "#111111",
                accent: "#10b981",
                primary: "#f3f4f6",
                muted: "#9ca3af",
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
            },
        },
    },
    plugins: [],
} satisfies Config;
