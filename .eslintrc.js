module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
      
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "globalReturn": false,
        },
        "allowImportExportEverywhere": false,
        "ecmaVersion": "latest",
        "sourceType": "module"
    },

    "plugins": [
        "react"
    ],
    "rules": {
    }
}
