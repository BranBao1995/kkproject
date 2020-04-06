import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';



const initialState = {
    
    images: [],
    loading: false
        
    
}


const fetchStart = (state, action) => {
    
    return updateObject(state, {
        
        loading: true
        
    });
    
}


const fetchFailed = (state, action) => {
    
    return updateObject(state, {
        
        loading: false
        
    });
    
}

const fetchSuccess = (state, action) => {
    
    return updateObject(state, {
        
        images: action.list,
        loading: false
        
    });
    
}


const reducer = (state = initialState, action) => {
    
    switch (action.type) {

        // case actionTypes.SWITCH_COMPONENT: return switchComponent(state, action);
        case actionTypes.FETCH_START:
            return fetchStart(state, action);
            
        case actionTypes.FETCH_FAIL:
            return fetchFailed(state, action);
            
        case actionTypes.FETCH_SUCCESS:
            return fetchSuccess(state, action);
            
        default: return state;

    }
    
}


export default reducer;