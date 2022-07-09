import DISHES from '../data/dishes'
import COMMENTS from '../data/comments'
import * as actions from './actionTypes'
import { combineReducers } from 'redux'

const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    homeTitle: 'Visit Food U Restaurent'
}

const commentReducer = (commentState = { comments: initialState.comments }, action) => {
    // console.log(action)
    switch (action.type) {

        case actions.NEW_COMMENT:
            let comment = action.payload
            comment.id = commentState.comments.length + 1
            let allComments = [...commentState.comments]
            let totalComment = allComments.concat(comment)

            return {
                ...commentState,
                comments: totalComment
            }
        default:
            return commentState
    }

}

const dishReducer = (dishState = { dishes: initialState.dishes }, action) => {
    return dishState
}


const Reducer = combineReducers({
    comments: commentReducer,
    dishes: dishReducer

})


export { Reducer }