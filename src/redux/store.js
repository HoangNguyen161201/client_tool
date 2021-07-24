import rootRedux from './reducers/index.js';
import {createStore} from 'redux';
const store = createStore(rootRedux);
export default store;