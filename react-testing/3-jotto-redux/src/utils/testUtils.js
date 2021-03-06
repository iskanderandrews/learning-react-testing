import { ShallowWrapper } from "enzyme";
import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../redux/reducers';
import { middlewares } from '../redux/configureStore';

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducers, middlewares
 * @function storeFactory
 * @param {object} initialState- Initial state for store.
 * @returns {Store} - Redux store 
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
}

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

/**
 * Function to check prop types of specific component.
 * @param {function} component - React component.
 * @param {object} conformingProps - Component prop object.
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name);
  expect(propError).toBeUndefined();
}