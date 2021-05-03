module.exports = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			fontFamily: {
				'poppins': "Poppins"
			}
		},
		colors: {
			"gb1": "#FDFAE5",
			"gb2": "#242324",
			"gb3": "#0C1135",
			"gb4": "#0AE6B0",
			"gb5": "#F3F3F8"
		}
	},
	plugins: [],
};
