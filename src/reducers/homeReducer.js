import { handleActions } from 'redux-actions';

const homeReducer = handleActions({
    HOME_REQUEST: (state, action) => {
        return {
            status: action.type,
            data: action.payload
        };
    },
    HOME_SUCCESS: (state, action) => {
        return {
            status: action.type,
            data: action.payload
        };
    },
   
},{});

export default homeReducer;