/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{ja,jsx,ts,tsx}"],
	theme: {
		screens: {
			lg: "1200px",
			minilaptop: "700px",
			tablet: "500px",
			hp: "400px",
			base: "0px"
		},
		extend: {},
		fontFamily: {
			poppins: "Poppins",
			helvetica: "Helvetica",
		},
	},
	plugins: [],
};
