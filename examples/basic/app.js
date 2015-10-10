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
    this.onResults = ::this.onResults;
    this.onError = ::this.onError;
    this.onEmptyField = ::this.onEmptyField;
  }
  onError() {
    console.log('onError', arguments);
  }
  onResults(content) {
    this.setState({
      hits: content.hits
    });
  }
  onEmptyField() {
    this.setState({
      hits: []
    });
  }
  renderResult(hit) {
    return (<li key={ hit.objectID }>
              <img className="thumb" src={ hit.image } style={ {float: 'left' } }/>
              <b>{ hit.name}</b>
              <br/>
              <p style={ {fontSize: 10 } }>{ hit.description }</p>
           </li>);
  }
  render() {
    return (
      <div className="example">
        <h1>algolia-react-input</h1>
        <AlgoliaInput placeholder="Product search..." client={ algoliaClient } options={ { hitsPerPage: 50 } } index='instant_search' onResults={ this.onResults } onEmptyField={ this.onEmptyField } onError={ this.onError }/>
        <hr/>
        <div className="results">
        { this.state.hits.map(this.renderResult) }
        </div>
      </div>
    );
  }
};

React.render(<App/>, document.getElementById('container'));
