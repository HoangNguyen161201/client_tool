import {createActions} from 'redux-actions';
const actionCategories = createActions({
    getData: (payload)=>{
        return payload;
    }
});
export default actionCategories;