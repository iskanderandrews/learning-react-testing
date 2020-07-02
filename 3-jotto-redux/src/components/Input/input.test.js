import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../utils/testUtils';
import { Input } from './Input';

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} initialState
 * @returns {ShallowWrapper} 
 */
const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />);
  console.log(wrapper.debug());
} 

setup();

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component wihout error', () => {

    });
    test('renders input box', () => {

    });
    test('renders submit button', () => {

    });
  });
  describe('word has been guessed', () => {
    test('renders component wihout error', () => {

    });
    test('does not renders input box', () => {

    });
    test('does not renders submit button', () => {

    });
  });
});

describe('update state', () => {

});