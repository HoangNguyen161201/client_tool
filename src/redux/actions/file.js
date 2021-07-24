import {createActions} from 'redux-actions';
const actionFile = createActions({
    saveFile: (payload)=>{
        return payload;
    },
    resetFile: undefined
});
export default actionFile;