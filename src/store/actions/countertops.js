import * as actionTypes from './actionTypes';
import axios from '../../axios-post';

export const fetchStart = () => {

    return {

        type: actionTypes.FETCH_START

    }

}

export const fetchFailed = (error) => {

    return {

        type: actionTypes.FETCH_FAIL,
        error: error

    }

}

export const fetchSuccess = (imageList) => {

    return {

        type: actionTypes.FETCH_SUCCESS,
        list: imageList

    }

}


export const fetch = () => {

    return (dispatch) => {

        // dispatch(fetchStart());

        // const userId = getState().auth.userId;
        // const token = getState().auth.token;
        const url = '/images.json';

        axios.get(url)
        .then(res => {

            const fetchedList = [];
            for (let key in res.data) {
                fetchedList.push({
                    ...res.data[key],
                    id: key
                });
            }

            dispatch(fetchSuccess(fetchedList));

        }).catch(error => {

            dispatch(fetchFailed(error));

        })

    }

}



