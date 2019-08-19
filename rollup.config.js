import resolve from "rollup-plugin-node-resolve";

export default {
	input: "src/main.esm.js",
	output: {
		file: "./dist/bundle.esm.js",
		format: "esm"
	},
	plugins: [
		resolve()
	]
};