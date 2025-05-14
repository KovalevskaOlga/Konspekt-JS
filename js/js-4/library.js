// LIBRARY SCRIPTS
//     "start": "npx parcel src/index.html",
//     "build": "parcel build src/index.html --no-cache --public-url ./",
//     "deploy": "gh-pages -d dist",
//     "predeploy": "npm run build"


// ФАЙЛ .gitignore
// .parcel-cache
// node_modules


// ФАЙЛ deploy.yml
// name: Build and deploy to GitHub Pages

// on:
//   push:
//     branches: [main]

// jobs:
//   build-and-deploy:
//     runs-on: ubuntu-latest
//     steps:
//       - name: Checkout 🛎️
//         uses: actions/checkout@v2.3.1

//       - name: Install and Build 🛠️
//         run: |
//           npm ci
//           npm run build

//       - name: Deploy 🚀
//         uses: JamesIves/github-pages-deploy-action@4.1.0
//         with:
//           branch: gh-pages
//           folder: dist
//           token: ${{ secrets.GITHUB_TOKEN }}


// ГЛОБАЛЬНО ФАЙЛ .parcelrc
// {
//     "extends": ["@parcel/config-default"],
//     "transformers": {
//       "*.hbs": ["parcel-transformer-hbs"]
//     }
//   }


// ГЛОБАЛЬНО ФАЙЛ .posthtmlrc
// {
//   "plugins": {
//     "posthtml-include": {
//       "root": "./src"
//     }
//   }
// }


// ГЛОБАЛЬНО ФАЙЛ .editorconfig
// root = true

// [*]
// indent_style = space
// indent_size = 2
// charset = utf-8
// trim_trailing_whitespace = true
// insert_final_newline = false

// [*.{json,md,yaml}]
// indent_size = 2
