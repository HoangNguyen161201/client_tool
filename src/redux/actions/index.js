import {createActions} from 'redux-actions';
const actionpost = createActions({
    getDataSuccess: (payload)=>{
        return payload;
    },
    getDataError: (error)=>{
        return error;
    },
    find: (search)=>{
        return search;
    },
    delete: (element)=>{
        return element;
    },
    update: (payload)=>{
        return payload;
    }
})
export default actionpost