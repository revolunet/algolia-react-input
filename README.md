# algolia-react-input

![npm](https://img.shields.io/npm/v/algolia-react-input.svg) ![license](https://img.shields.io/npm/l/algolia-react-input.svg) ![github-issues](https://img.shields.io/github/issues/revolunet/algolia-react-input.svg)  

![nodei.co](https://nodei.co/npm/algolia-react-input.png?downloads=true&downloadRank=true&stars=true)

A simple react input component to query your algolia index

Demo : http://revolunet.github.io/algolia-react-input/#/example1

## Usage

```js
const algoliasearch = require('algoliasearch');
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

See complete example in [./docs/AlgoliaExample.js](./docs/AlgoliaExample.js)


## Contributing

Contributions welcome; Please submit all pull requests the against master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Thanks!

## Author
 - Julien Bouquillon <julien@bouquillon.com> http://github.com/revolunet

## License

 - **MIT** : http://opensource.org/licenses/MIT
