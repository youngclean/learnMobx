module.exports = {
 // "extends": "airbnb",
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures":
     { "jsx": true }
  },
  "env":{
    "es6": true,
    "browser": true,
    "node": true
  },
  "parser": "babel-eslint",
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "rules": {
    "arrow-parens": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-first-prop-new-line": 1,
    "import/newline-after-import": 0,
    "import/no-dynamic-require": 0,
    "no-console": 0,
  }
};
