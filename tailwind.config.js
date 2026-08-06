/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
        './landing/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
                elegant: ['var(--font-cormorant)'],
                body: ['Inter', 'sans-serif'],
                accent: ['var(--font-space)'],
                redhat: ['var(--font-redhat)'],
                leckerli: ['var(--font-leckerli)'],
                satisfy: ['var(--font-satisfy)'],
            },
            colors: {
                slate: {
                    300: '#f1f5f9', // normally 100
                    400: '#e2e8f0', // normally 200
                },
                brand: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                    950: '#081225',
                },
                'accent': {
                    400: '#22d3ee',
                    500: '#06b6d4',
                },
                ink: '#0A0A0B',
                'ink-soft': '#1A1A1C',
                paper: '#F8F7F4',
                'paper-warm': '#FAF8F5',
                graphite: '#2D2D2F',
                'graphite-light': '#4A4A4D',
                mist: '#E8E6E3',
                'accent-violet': '#7C3AED',
                'accent-violet-deep': '#5B21B6',
                'accent-coral': '#F97066',
                'accent-coral-soft': '#FEB8B3',
                'accent-gold': '#D4AF37',
                'accent-gold-soft': '#E8D48A',
                'accent-cyan': '#06B6D4',
                'accent-indigo': '#4F46E5',
            },
            animation: {
                'gradient': 'gradient 8s linear infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
        },
    },
    plugins: [],
}
