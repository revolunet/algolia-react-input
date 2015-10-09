# algolia-react-input

![npm](https://img.shields.io/npm/v/algolia-react-input.svg) ![license](https://img.shields.io/npm/l/algolia-react-input.svg) ![github-issues](https://img.shields.io/github/issues/.git.svg)  

![nodei.co](https://nodei.co/npm/algolia-react-input.png?downloads=true&downloadRank=true&stars=true)

A simple react input component to query your algolia index

## Usage

```js

const algoliaClient = algoliasearch('APPLICATION_ID', 'SEARCH_ONLY_API_KEY');

<AlgoliaInput
  client={ algoliaClient }
  index='MyIndexName'
  onResults={ this.onResults }
  onError={ this.onError }
/>

```

See complete example in [./examples/basic/apps.js](./examples/basic/apps.js)


## Scripts  

 - **npm run test** : `rackt test --single-run --browsers Firefox`
 - **npm run start** : `rackt server`
 - **npm run build** : `rackt build`
 - **npm run readme** : `./node_modules/.bin/node-readme`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[react](https://www.npmjs.com/package/react) | 0.13.3 | ✖
[node-readme](https://www.npmjs.com/package/node-readme) | 0.1.8 | ✔
[rackt-cli](https://www.npmjs.com/package/rackt-cli) | ^0.4.0 | ✔
[react](https://www.npmjs.com/package/react) | ^0.13.3 | ✔


## Contributing

Contributions welcome; Please submit all pull requests the against master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

Julien Bouquillon <julien@bouquillon.com> http://github.com/revolunet

## License

 - **MIT** : http://opensource.org/licenses/MIT
