module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true
	},
	"parser": "babel-eslint",
	"extends": [
		"eslint:recommended",
		"airbnb",
	],
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true
		},
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"flowtype",
	],
	"rules": {
		"flowtype/boolean-style": [
			2,
			"boolean"
		],
		"flowtype/define-flow-type": 1,
		"flowtype/delimiter-dangle": [
			2,
			"always"
		],
		"flowtype/generic-spacing": [
			2,
			"never"
		],
		"flowtype/no-primitive-constructor-types": 2,
		"flowtype/no-types-missing-file-annotation": 2,
		"flowtype/no-weak-types": 2,
		"flowtype/object-type-delimiter": [
			2,
			"comma"
		],
		"flowtype/require-parameter-type": 2,
		"flowtype/require-return-type": [
			2,
			"always",
			{
				"annotateUndefined": "never"
			}
		],
		"flowtype/require-valid-file-annotation": 2,
		"flowtype/semi": [
			2,
			"never"
		],
		"flowtype/space-after-type-colon": [
			2,
			"always"
		],
		"flowtype/space-before-generic-bracket": [
			2,
			"never"
		],
		"flowtype/space-before-type-colon": [
			2,
			"never"
		],
		"flowtype/type-id-match": [
			2,
			"^([A-Z][a-z0-9]+)+Type$"
		],
		"flowtype/union-intersection-spacing": [
			2,
			"always"
		],
		"flowtype/use-flow-type": 1,
		"flowtype/valid-syntax": 1,
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		],
		"spaced-comment": ["error", "always", { "markers": ["::"]}],
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"no-tabs": 0,
		"react/jsx-indent": [1, "tab"],
		"react/jsx-indent-props": [1, "tab"],
		"quotes": ["error", "single"],
		"jsx-a11y/anchor-is-valid": 0,
	},
	"settings": {
		"flowtype": {
		  "onlyFilesWithFlowAnnotation": false
		}
	  }
};