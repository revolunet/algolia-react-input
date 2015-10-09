import React, { PropTypes, Component } from 'react';

export default class AlgoliaInput extends Component {
  static propTypes = {
    client: PropTypes.object.isRequired,
    index: PropTypes.string.isRequired,
    onResults: PropTypes.func.isRequired,
    onError: PropTypes.func,
    className: PropTypes.string
  }
  constructor(...args) {
    super(...args);
    this.onKeyUp = ::this.onKeyUp;
  }
  componentDidMount() {
    this.index = this.props.client.initIndex(this.props.index);
  }
  onKeyUp(e) {
    if (e.target.value) {
      this.index.search(e.target.value, (err, content) => {
        if (err && this.props.onError) {
          this.props.onError(err);
        }
        if (content) {
          this.props.onResults(content);
        }
      });
    }
  }
  render() {
    return (
      <div>
        <input onKeyUp={ this.onKeyUp } type='text' className={ this.props.className || 'algolia-react-input' } />
      </div>
    );
  }

};
