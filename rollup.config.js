import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";

export default {
	input: "src/main.esm.js",
	output: {
		file: "./dist/bundle.esm.js",
		format: "esm"
	},
	plugins: [
		resolve(),
		url({
			limit: 0,
			include: [
				/.*i18n\/.*\.json/,
			],
			emitFiles: true,
			fileName: "[name].[hash][extname]",
			publicPath: "/dist/",
		})
	]
};