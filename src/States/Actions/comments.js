/* src/States/Actions/comments.js */

import {
    FETCH_COMMENT_REJECTED,
    FETCH_COMMENT_FULLFILLED
} from "../../Constants/actionTypes";

import axios from "axios";

export function fetchComments() {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then( res => {
                dispatch({ type: FETCH_COMMENT_FULLFILLED, payload: res.data })
            })
            .catch( err => {
                dispatch({ type: FETCH_COMMENT_REJECTED, payload: err })
            })
    }
}