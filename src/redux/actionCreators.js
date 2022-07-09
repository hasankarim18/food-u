import * as actions from './actionTypes'




export const addComment = comment => {
    return {
        type: actions.NEW_COMMENT,
        payload: comment
    }
}