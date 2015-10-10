# algolia-react-input

![npm](https://img.shields.io/npm/v/algolia-react-input.svg) ![license](https://img.shields.io/npm/l/algolia-react-input.svg) ![github-issues](https://img.shields.io/github/issues/revolunet/algolia-react-input.svg)  

![nodei.co](https://nodei.co/npm/algolia-react-input.png?downloads=true&downloadRank=true&stars=true)

A simple react input component to query your algolia index

Demo : http://revolunet.github.io/algolia-react-input

## Usage

```js

const algoliaClient = algoliasearch('APPLICATION_ID', 'SEARCH_ONLY_API_KEY');
const algoliaOptions = {
  hitsPerPage: 200
};

return <AlgoliaInput
  client={ algoliaClient }
  index='Products'
  options= { algoliaOptions }
  onResults={ this.onResults }
  onError={ this.onError }
  placeholder='Product Search...'
/>;

```

See complete example in [./examples/basic/app.js](./examples/basic/app.js)


## Scripts  

 - **npm run test** : `rackt test --single-run`
 - **npm run start** : `rackt server`
 - **npm run build** : `rackt build`
 - **npm run readme** : `./node_modules/.bin/node-readme`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[babel-runtime](https://www.npmjs.com/package/babel-runtime) | ^5.8.25 | ✔
[eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) | ^3.5.1 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔
[rackt-cli](https://www.npmjs.com/package/rackt-cli) | ^0.4.0 | ✔
[algoliasearch](https://www.npmjs.com/package/algoliasearch) | ^3.8.1 | ✔


## Contributing

Contributions welcome; Please submit all pull requests the against master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author
 - Julien Bouquillon <julien@bouquillon.com> http://github.com/revolunet

## License

 - **MIT** : http://opensource.org/licenses/MIT
