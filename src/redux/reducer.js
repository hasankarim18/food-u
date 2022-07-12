
import { selectedCommentsFromDatabase as fetchSelectedComments } from '../data/comments'
import * as actions from './actionTypes'
import { combineReducers } from 'redux'



const commentState = {
    comments: [],
    commentIsLoading: false,
    commentLoadFailed: false,
    newCommentFailed: false

}

const dishState = {
    dishes: [],
    dishIsLaoding: false,
    dishLoadingFailed: false,
    dishErrMsg: null
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
        // select 
        case actions.SELECTED_COMMENT:
            let selectedComments = fetchSelectedComments(action.payload)
            console.log(selectedComments)
            return {
                ...state,
                commentIsLoading: false,
                comments: selectedComments
            }

        case actions.LOAD_COMMENTS:
            return {
                ...state,
                commentIsLoading: false,
                comments: action.payload

            }
        case actions.NEW_COMMENT_FAILED:
            return {
                ...state,
                commentIsLoading: false,
                comments: [],
                newCommentFailed: true
            }
        case actions.NEW_COMMENT:
            let comment = action.payload
            comment.date = new Date().toDateString()
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
        case actions.DISH_FAILED:
            return {
                ...state,
                dishIsLaoding: false,
                dishes: [],
                dishLoadingFailed: true,
                dishErrMsg: action.payload
            }
        default:
            return state
    }

}

const slideState = {
    slides: [],
    isSlideLoading: true,
    slideLoadingFailed: false,
    slideLoadingErrMess: null
}

const sliderReducer = (state = slideState, action) => {

    switch (action.type) {
        case actions.LOADING_SLIDER:
            return {
                ...state,
                slides: [],
                isSlideLoading: true,
                slideLoadingErrMess: null,
                slideLoadingFailed: false
            }
        case actions.LOAD_SLIDER:
            return {
                ...state,
                slides: action.payload,
                isSlideLoading: false,
                slideLoadingErrMess: null,
                slideLoadingFailed: false
            }
        case actions.LOADING_SLIDER_FAILED:
            console.log('reducer slide failed', action.payload)
            return {
                ...state,
                slides: [],
                isSlideLoading: false,
                slideLoadingErrMess: action.payload,
                slideLoadingFailed: true
            }


        default:
            return state
    }

}


const Reducer = combineReducers({
    comments: commentReducer,
    dishes: dishReducer,
    slider: sliderReducer

})


export { Reducer }