module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": {
        "ecmascript": 6,
        "jsx": true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "experimentalObjectSpread": true,
            "experimentalDecorators": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "extends": "airbnb",
    "rules": {
        "react/prop-types": 0,
        "react/jsx-filename-extension": 0,
        "no-return-assign": 0,
        "jsx-a11y/label-has-associated-control": 0,
        "jsx-a11y/label-has-for": 0
    },

};