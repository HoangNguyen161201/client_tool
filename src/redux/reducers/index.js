import {combineReducers} from 'redux';
import {reducer} from './blog.js';
import categoriesRd from './categoriesRd';
import fileRd from './file';
const rootRedux = combineReducers({
    post: reducer,
    categories: categoriesRd,
    saveFile: fileRd 
});
export default rootRedux;