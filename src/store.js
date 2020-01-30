import { createStore } from 'redux';
import reducer from './reducer/index';

export default function create(initialState) {
  return createStore(reducer, initialState);
}
