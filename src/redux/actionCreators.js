import * as actions from './actionTypes'
import axios from 'axios'

import * as url from './urls'




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

        axios.get(url.dishesGit)
            .then(res => {
                if (res.status === 200) {
                    dispatch(loadDishes(res.data))
                }

            })
            .catch(err => console.log(err))
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


        axios.get(url.comments)
            .then(res => {
                dispatch(loadComments(res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}


const commentConcat = comment => {
    return {
        type: actions.NEW_COMMENT,
        payload: comment
    }
}

export const addComment = (comment) => dispatch => {

    axios.post(url.comments, comment)
        .then(res => res.data)
        .then(data => {
            dispatch(commentConcat(data))
        })
        .catch(err => {
            console.log(err)
        })


}