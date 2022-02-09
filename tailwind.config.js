const palette = require('./palette');

module.exports = {
	content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: palette,
			fontFamily: {
				roboto: ['"Roboto"'],
				montserrat: ['"Montserrat"'],
				indieFlower: ['"Indie Flower"'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
