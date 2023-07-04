/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: '#4669fa',
					light: '#F6F8FF'
				},
				secondary: {
					DEFAULT: '#A0AEC0',
					light: '#F9FAFB'
				},
				success: {
					DEFAULT: '#50C793',
					light: '#F3FEF8'
				},
				danger: {
					DEFAULT: '#F1595C',
					light: '#FFF7F7'
				},
				warning: {
					DEFAULT: '#FA916B',
					light: '#FFFAF8'
				},
				info: {
					DEFAULT: '#0CE7FA',
					light: '#F3FEFF'
				},
				dark: {
					DEFAULT: '#3b3f5c',
					light: '#eaeaec'
				},
				black: {
					DEFAULT: '#111112',
					light: '#F9FAFB'
				},
				white: {
					DEFAULT: '#ffffff',
					light: '#e0e6ed',
					dark: '#888ea8',
				},
			},
			fontFamily: {
				ali: ["AlimamaFangYuanTiVF", "sans-serif"]
			}
		}
	},
	plugins: []
};
