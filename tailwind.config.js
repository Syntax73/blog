/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		`components/**/*.{vue,js}`,
		`layouts/**/*.vue`,
		`pages/**/*.vue`,
		`composables/**/*.{js,ts}`,
		`plugins/**/*.{js,ts}`,
		`App.{js,ts,vue}`,
		`app.{js,ts,vue}`,
	],
	theme: {
		extend: {
			colors: {
				light: {
					100: '#e5e3ca',
					200: '#c6b581',
					300: '#b4a065',
				},
			},
		},
	},
	plugins: [],
};
