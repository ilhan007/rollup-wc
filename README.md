## UI5 Web Components + Rollup starter
Simple 'hello world' app, showing how to consume and bundle [UI5 Web Components](https://sap.github.io/ui5-webcomponents) with [Rollup](https://rollupjs.org/guide/en/).


## Key files
### -- index.html
Use the desired UI5 Web Components as regular HTML tags and load the application bundle `(bundle.esm.js)`.

```html
<!DOCTYPE html>
<html>

<body>
	<ui5-button>Press</ui5-button>
	<ui5-textarea show-exceeded-text max-length="8"></ui5-textarea>
	<ui5-select style="width: 180px">
		<ui5-option>Compact</ui5-option>
		<ui5-option>Cozy</ui5-option>
		<ui5-option>Condensed</ui5-option>
	</ui5-select>

	<script src="./dist/bundle.esm.js" type="module"></script>
</body>

</html>
```

### --main.esm.js
Import any component available in npm via: `import "@ui5/webcomponents/dist/<component_name>";`.

```js
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/TextArea";
import "@ui5/webcomponents/dist/Select";
import "@ui5/webcomponents/dist/Option";
```

### --rollup.config.js
Set up minimal build configuration. Point the entry file of your app sources `(main.esm.js)` and define the build output file name and format `(bundle.esm.js)`.
-  Note: there is one rollup plugin used, called `rollup-plugin-node-resolve`. The plugin resolves imports within the app node_modules (exactly where the UI5 Web Components would be installed). 
- Note: the following build targets browsers, supporting ES6.

```js
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
```

### Necessary dependencies (package.json)

```json
{
	"name": "rollup-wc",
	"version": "1.0.0",
	"description": "",
	"scripts": {
		"build": "rollup -c",
		"start": "npm-run-all --sequential build serve:static",
		"serve:static": "serve"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"dependencies": {
		"@ui5/webcomponents": "^1.0.0-rc.2"
	},
	"devDependencies": {
		"npm-run-all": "^4.1.3",
		"rollup": "^1.19.4",
		"rollup-plugin-node-resolve": "^4.0.0",
		"serve": "^11.1.0"
	}
}
```

## Run the project locally

- npm install
- npm run start

## Demo
