import { legacy_createStore as createStore } from 'redux';
import { reducer } from '../reducer/reducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(reducer, composeWithDevTools());
