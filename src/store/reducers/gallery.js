import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    
    gallery: [],
    parentButton: 'countertops',
    childButton: 'all',
    loading: false
    
    
}


const fetchStart_gallery = (state, action) => {
    
    return updateObject(state, {loading: true});
    
}


const fetchFailed_gallery = (state, action) => {
    
    return updateObject(state, {loading: false});
    
}


const fetchSuccess_gallery = (state, action) => {
    
    return updateObject(state, {
        
        gallery: action.list,
        loading: false
        
    })
    
}

const activeButton = (state, action) => {
    
    return updateObject(state, {
        
        parentButton: action.parentButton,
        childButton: action.childButton
        
    });
    
}

const reducer = (state=initialState, action) => {
    
    
    switch (action.type) {

        // case actionTypes.SWITCH_COMPONENT: return switchComponent(state, action);
        
        case actionTypes.FETCH_START:
            return fetchStart_gallery(state, action);
            
        case actionTypes.FETCH_FAIL:
            return fetchFailed_gallery(state, action);
            
        case actionTypes.FETCH_SUCCESS:
            return fetchSuccess_gallery(state, action);
        
        case actionTypes.ACTIVE_BUTTON:
            return activeButton(state, action);
            
        default: return state;

    }
    
    
};


export default reducer;