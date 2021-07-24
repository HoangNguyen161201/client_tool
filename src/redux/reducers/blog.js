import actionpost from '../actions/index.js';
import Axios from 'axios';
const oldState = {
    data:[],
    error: false,
    search:''
}
export const reducer = (state = oldState, action)=>{
    switch (action.type) {
        case actionpost.getDataSuccess().type:
            return {
                ...state,
                data: [...state.data,...action.payload],
            };
        case actionpost.getDataError().type:
            return {
                ...state,
                error: false,
            };      
        case actionpost.find().type:
            return {
                ...state,
                search: action.payload,
            }; 
        case actionpost.delete().type:
            Axios.post('http://localhost:4000/post/DeleteElement',{
                _id: action.payload
            });
          
            const data1 = state.data.filter(value=>{
                if(!value._id.toLowerCase().includes(action.payload)){
                    return value;
                }
                return 0;
            })
            return {
                ...state,
                data: data1,
            }; 
        case actionpost.update().type:
           
            const data2 = state.data.filter(value=>{
                if(value._id === action.payload._id){
                    value.title = action.payload.title;
                    value.content = action.payload.content;
                    value.link = action.payload.link;
                    if(action.payload.img !== undefined){
                        value.img = action.payload.img;
                    }
                    return value;
                }
                else{
                    return value;
                }
            })
            return {
                ...state,
                data: data2,
            }; 
        default:
            return state;
    }
}