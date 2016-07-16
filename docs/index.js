/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Fork from 'react-ghfork';
import { Catalog, CodeSpecimen, ReactSpecimen } from 'catalog';
import AlgoliaExample from './AlgoliaExample';

import 'purecss/build/pure.css';
import 'react-ghfork/gh-fork-ribbon.ie.css';
import 'react-ghfork/gh-fork-ribbon.css';
import './main.css';
import '../style.css';



// Add your documentation imports here. These are available to
// React specimen.
const documentationImports = {
  React,
  ReactDOM
};
const title = `${NAME} v${VERSION}`; // eslint-disable-line no-undef
const project = `${USER}/${NAME}`; // eslint-disable-line no-undef
const pages = [
  {
    path: '/',
    title: 'Introduction',
    imports: documentationImports,
    component: require('catalog/lib/loader!raw!../README.md')
  },
  {
    path: '/example1',
    title: 'Example 1',
    imports: documentationImports,
    component: AlgoliaExample
  }
];

class Doc extends Component {
  render() {
    return <div>
            <Fork
              className="right"
              project={project}
              style={{
                backgroundColor: '#000'
              }}
            />
            <Catalog
              pages={pages}
              specimens={{
                javascript: props => <CodeSpecimen {...props} lang="javascript" />,
                js: props => <CodeSpecimen {...props} lang="javascript" />,
                jsx: props => <ReactSpecimen {...props} />
              }}
              title={title}
            />
          </div>
  }
}

ReactDOM.render(
  <Doc/>,
  document.getElementById('app')
);
