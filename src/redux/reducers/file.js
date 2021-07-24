import actionFile from '../actions/file';
const oldState = {
    file:'',
    name:''
}
const fileRd = (state = oldState, action)=>{
    switch (action.type) {
        case actionFile.saveFile().type:
            return {
                ...state,
                file: action.payload.file,
            }
        case actionFile.resetFile().type:
            return {
                ...state,
                file: [],
            }
        default:
            return state;
    }
}
export default fileRd;
