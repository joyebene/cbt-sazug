import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "var(--primary)",
                    light: "var(--primary-light)",
                    dark: "var(--primary-dark)",
                },
                secondary: {
                    DEFAULT: "var(--secondary)",
                    light: "var(--secondary-light)",
                },
                border: "var(--border)",
                card: "var(--card)",
                muted: "var(--muted)",
                background: "var(--background)",
                foreground: "var(--foreground)",
                success: "var(--success)",
                warning: "var(--warning)",
                danger: "var(--danger)",
            },
            height: {
                '162.5': '40.625rem', // 650px
            },
        },
    },
    plugins: [],
};
export default config;