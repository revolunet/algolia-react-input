# algolia-react-input

A simple react input component yo query your algolia index

```js

const algoliaClient = algoliasearch('APPLICATION_ID', 'SEARCH_ONLY_API_KEY');

<AlgoliaInput
  client={ algoliaClient }
  index='MyIndexName'
  onResults={ this.onResults }
  onError={ this.onError }
/>

```
