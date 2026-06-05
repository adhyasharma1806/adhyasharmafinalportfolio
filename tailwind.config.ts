
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Editorial design tokens
				charcoal: 'hsl(24 8% 14%)',
				stone: 'hsl(36 12% 92%)',
				'warm-white': 'hsl(36 20% 97%)',
				ink: 'hsl(24 10% 10%)',
			},
			fontFamily: {
				serif: ['"DM Serif Display"', 'Georgia', 'serif'],
				sans: ['Inter', '"DM Sans"', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
				'128': '32rem',
			},
			fontSize: {
				'display': ['clamp(3.5rem, 8vw, 9rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
				'display-lg': ['clamp(2.5rem, 5vw, 5rem)', { lineHeight: '1.0', letterSpacing: '-0.025em' }],
				'display-md': ['clamp(1.8rem, 3vw, 2.8rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'editorial-reveal': {
					'0%': { opacity: '0', transform: 'translateY(28px)', filter: 'blur(4px)' },
					'100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' }
				},
				'reveal-left': {
					'0%': { opacity: '0', transform: 'translateX(-24px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'reveal-right': {
					'0%': { opacity: '0', transform: 'translateX(24px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(16px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.97)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'line-expand': {
					'0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
					'100%': { transform: 'scaleX(1)', transformOrigin: 'left' }
				},
				'subtle-breathe': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.01)' }
				},
				// Legacy compat
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(28px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-24px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(24px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-6px)' }
				},
				'glow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'editorial-reveal': 'editorial-reveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
				'reveal-left': 'reveal-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
				'reveal-right': 'reveal-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
				'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
				'scale-in': 'scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
				'line-expand': 'line-expand 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
				'subtle-breathe': 'subtle-breathe 6s ease-in-out infinite',
				// Legacy compat
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
				'fade-in-left': 'fade-in-left 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
				'fade-in-right': 'fade-in-right 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
