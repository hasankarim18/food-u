import * as actions from './actionTypes'
import DISHES from '../data/dishes'
import COMMENTS from '../data/comments'
import { selectedCommentsFromDatabase as seletedComments } from '../data/comments'




const loadDishes = dish => {
    return {
        type: actions.LOAD_DISHES,
        payload: dish
    }
}



const dishLoading = () => {
    return {
        type: actions.DISHES_LOADING
    }
}

export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishLoading())

        setTimeout(() => {
            dispatch(loadDishes(DISHES))
        }, 500);

    }
}


// comment loading and show

const loadComments = comments => {
    return {
        type: actions.LOAD_COMMENTS,
        payload: comments
    }
}

const commentsLoading = () => {
    return {
        type: actions.COMMENT_LOADING
    }
}

export const loadSelectedCommentsId = dishId => {
    return {
        type: actions.SELECTED_COMMENT,
        payload: dishId
    }
}

export const fetchComments = () => {
    return dispatch => {
        dispatch(commentsLoading())


        setTimeout(() => {
            dispatch(loadComments(COMMENTS))
            //  dispatch(loadSelectedCommentsId(dishId))
        }, 2000);
    }
}


export const addComment = comment => {
    return {
        type: actions.NEW_COMMENT,
        payload: comment
    }
}