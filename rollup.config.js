import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
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
				/assets\/.*\.json/,
			],
			emitFiles: true,
			fileName: "[name].[hash][extname]",
			publicPath: "dist/",
		}),
		terser(),
	]
};