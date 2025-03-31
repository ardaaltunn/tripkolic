import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#F4921D', // Orange color from the design
                secondary: '#4AAEE5', // Blue color from the design
                gray: {
                    50: '#F9F9F9',  // Very light gray for background
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    300: '#D1D5DB',
                    400: '#9CA3AF',
                    500: '#6B7280',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#1F2937',
                    900: '#111827',
                }
            },
            boxShadow: {
                'soft-xl': '0 10px 25px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
                'soft-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.05)',
            },
            fontFamily: {
                sans: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'sans-serif',
                ],
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            backdropBlur: {
                sm: '8px',
                DEFAULT: '10px',
                md: '15px',
                lg: '20px',
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            const newUtilities = {
                '.bg-glass': {
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                },
            }
            addUtilities(newUtilities)
        }),
        // Enabling backdrop filter
        plugin(function ({ addBase, addUtilities }) {
            addUtilities({
                '.backdrop-blur-sm': {
                    'backdrop-filter': 'blur(8px)',
                },
                '.backdrop-blur': {
                    'backdrop-filter': 'blur(10px)',
                },
                '.backdrop-blur-md': {
                    'backdrop-filter': 'blur(15px)',
                },
                '.backdrop-blur-lg': {
                    'backdrop-filter': 'blur(20px)',
                },
            })
        })
    ],
};

export default config; 