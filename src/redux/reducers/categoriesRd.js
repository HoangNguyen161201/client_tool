import actionCategories from '../actions/categories';
const oldState = {
    data:[]
}
const categoriesRd = (state = oldState, action)=>{
    switch (action.type) {
        case actionCategories.getData().type:
            return {
                ...state,
                data: [...state.data,...action.payload]
            }
    
        default:
            return state;
    }
}
export default categoriesRd;