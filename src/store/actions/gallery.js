import * as actionTypes from './actionTypes';
import axios from '../../axios-post';

export const fetchStart_gallery = () => {

    return {

        type: actionTypes.FETCH_START

    }

}

export const fetchFailed_gallery = (error) => {

    return {

        type: actionTypes.FETCH_FAIL,
        error: error

    }

}

export const fetchSuccess_gallery = (imageList) => {

    return {

        type: actionTypes.FETCH_SUCCESS,
        list: imageList

    }

}

export const activeButton = (parent, child) => {
    
    return {
        
        type: actionTypes.ACTIVE_BUTTON,
        parentButton: parent,
        childButton: child
        
    }
    
}



export const fetchGallery = (parentNode, childNode) => {
    

    return (dispatch) => {
        
        dispatch(activeButton(parentNode, childNode));

        // dispatch(fetchStart());

        // const userId = getState().auth.userId;
        // const token = getState().auth.token;
        
        const url = '/' + parentNode + '/' + childNode + '.json';
        
        // console.log(parentNode);

        axios.get(url)
        .then(res => {

            const fetchedList = [];
            for (let key in res.data) {
                fetchedList.push({
                    ...res.data[key],
                    id: key
                });
            }

            dispatch(fetchSuccess_gallery(fetchedList));

        }).catch(error => {

            dispatch(fetchFailed_gallery(error));

        })

    }

}