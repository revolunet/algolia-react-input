import React, { PropTypes, Component } from 'react';
import algoliasearch from 'algoliasearch';

import AlgoliaInput from '../../lib/index';



const algoliaClient = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      hits: []
    };
  }
  onError() {
    console.log('onError', arguments);
  }
  onResults(content) {
    this.setState({
      hits: content.hits
    });
  }
  render() {
    return (
      <div className="example">
        <h1>algolia-react-input</h1>
        <AlgoliaInput client={ algoliaClient } index='instant_search' onResults={ ::this.onResults } onError={ ::this.onError }/>
        <hr/>
        { this.state.hits.map(hit => <li ref={ hit.objectID }>{ hit.name || hit.title }</li> ) }
      </div>
    );
  }
};

React.render(<App/>, document.getElementById('container'));
