import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";

export default {
	input: "src/bundle.esm.js",
	output: {
		dir: "dist/",
		format: "esm"
	},
	plugins: [
		resolve(),
		url({
			limit: 0,
			include: [
				/.*\.json/,
			],
			emitFiles: true,
			fileName: "[name].[hash][extname]",
			publicPath: "dist/",
		})
	]
};