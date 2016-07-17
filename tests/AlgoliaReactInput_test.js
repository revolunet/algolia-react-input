import React from 'react';
import expect from 'expect';
import algoliasearch from 'algoliasearch';
import TestUtils from 'react-addons-test-utils';
import { ok, equal } from 'assert';



import AlgoliaReactInput from '../src';

const algoliaClient = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');

const renderAlgoliaInput = props => {
    const defaultProps = {
        placeholder: "myPlaceholder",
        client: algoliaClient,
        index: 'instant_search'
    }
    return TestUtils.renderIntoDocument(
        <AlgoliaReactInput { ...defaultProps } { ...props }/>
    );
}
/* eslint func-names:0 */
describe('algolia-react-input', function() {
  it('should have tests', function() {
    ok(true);
  });
  it('should have valid DOM', () => {
    let component = renderAlgoliaInput();

    let input = TestUtils.findRenderedDOMComponentWithTag(
       component, 'input'
    );

    expect(input.type).toEqual("text");
    expect(input.placeholder).toEqual("myPlaceholder");
    expect(input.className).toEqual("algolia-react-input");

  });

  it('should override className', () => {
    let component = renderAlgoliaInput({
        className: 'testCls'
    });

    let input = TestUtils.findRenderedDOMComponentWithTag(
       component, 'input'
    );

    expect(input.className).toEqual("testCls");

  });

  it('should call initIndex on mount', () => {
    let called = false;
    let component = renderAlgoliaInput({
        client: {
            initIndex: () => called = true
        }
    });

    expect(called).toEqual(true);

  });

  it('should call search onKeyUp', () => {
    let called = false;
    let sampleResults = ['a', 'b', 'c'];
    const search = (value, options, cb) => {
        called = true;
        return cb(null, sampleResults);
    };

    let component = renderAlgoliaInput({
        client: {
            initIndex: () => ({ search: search })
        }
    });

    let input = TestUtils.findRenderedDOMComponentWithTag(
       component, 'input'
    );

    input.value='test';
    TestUtils.Simulate.keyUp(input);
    expect(called).toEqual(true);

  });


  it('should call onResults with results', () => {
    let called = false;
    let sampleResults = ['a', 'b', 'c'];
    const search = (value, options, cb) => {
        called = true;
        return cb(null, sampleResults);
    };
    let results = null;
    let component = renderAlgoliaInput({
        onResults: (data) => {
            results = data
        },
        client: {
            initIndex: () => ({ search: search })
        }
    });

    let input = TestUtils.findRenderedDOMComponentWithTag(
       component, 'input'
    );

    input.value='test';
    TestUtils.Simulate.keyUp(input);
    expect(results).toEqual(sampleResults);

  });

});
