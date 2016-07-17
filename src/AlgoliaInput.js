import React, { PropTypes, Component } from 'react';

export default class AlgoliaInput extends Component {
  static propTypes = {
    client: PropTypes.object.isRequired,
    index: PropTypes.string.isRequired,
    options: PropTypes.object,
    onResults: PropTypes.func,
    onError: PropTypes.func,
    onEmptyField: PropTypes.func, // when user empty the field
    className: PropTypes.string,
    style: PropTypes.object,
    placeholder: PropTypes.string
  }
  static defaultProps = {
    options: {},
    placeholder: null
  }
  componentDidMount() {
    this.index = this.props.client.initIndex(this.props.index);
  }
  onKeyUp = (e) => {
    if (e.target.value) {
      this.index.search(e.target.value, this.props.options, (err, content) => {
        if (err && this.props.onError) {
          this.props.onError(err);
        }
        if (content && this.props.onResults) {
          this.props.onResults(content);
        }
      });
    } else if (this.props.onEmptyField){
      this.props.onEmptyField();
    }
  }
  render() {
    return (
      <div>
        <input style={ this.props.style || { WebkitUserSelect: 'auto', userSelect: 'auto' } } onKeyUp={ this.onKeyUp } placeholder={ this.props.placeholder } type='text' className={ this.props.className || 'algolia-react-input' } />
      </div>
    );
  }

}
