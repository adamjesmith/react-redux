import { createStore } from 'redux';
import reducer from './reducer/index';

const store = creatStore(store,
  typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION() : (f) => f
)

export default store;