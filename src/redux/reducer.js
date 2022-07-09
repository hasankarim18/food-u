

import * as actions from './actionTypes'
import { combineReducers } from 'redux'



const commentState = {
    comments: [],
    commentIsLoading: false

}

const dishState = {
    dishes: [],
    dishIsLaoding: false
}

const commentReducer = (state = commentState, action) => {
    // console.log(action)
    switch (action.type) {

        // commentisLoading 
        case actions.COMMENT_LOADING:
            return {
                ...state,
                commentIsLoading: true
            }
        case actions.LOAD_COMMENTS:
            return {
                ...state,
                commentIsLoading: false,
                comments: action.payload

            }
        case actions.NEW_COMMENT:
            let comment = action.payload
            comment.id = state.comments.length + 1
            let allComments = [...state.comments]
            let totalComment = allComments.concat(comment)

            return {
                ...state,
                comments: totalComment
            }
        default:
            return state
    }

}

const dishReducer = (state = dishState, action) => {
    switch (action.type) {
        // load

        case actions.DISHES_LOADING:
            return {
                ...state,
                dishIsLaoding: true
            }
        case actions.LOAD_DISHES:
            return {
                ...state,
                dishIsLaoding: false,
                dishes: action.payload
            }
        default:
            return state
    }

}


const Reducer = combineReducers({
    comments: commentReducer,
    dishes: dishReducer

})


export { Reducer }