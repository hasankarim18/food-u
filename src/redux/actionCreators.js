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

const dishFailed = (errMsg) => {
    return {
        type: actions.DISH_FAILED,
        payload: errMsg

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
            .catch(err => {
                console.log(err)
                dispatch(dishFailed(err.message))
            })
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

const commentsLoadFailed = errMsg => {
    return {
        type: actions.COMMENT_LOADING_FAILED,
        payload: errMsg
    }
}

export const fetchComments = () => {
    return dispatch => {
        dispatch(commentsLoading())


        axios.get(url.commentsGit)
            .then(res => {
                dispatch(loadComments(res.data))
            })
            .catch(err => {
                console.log(err)
                dispatch(commentsLoadFailed(err.message))
            })
    }
}


const commentConcat = comment => {
    return {
        type: actions.NEW_COMMENT,
        payload: comment
    }
}

const addCommentFailed = errMsg => {
    return {
        type: actions.NEW_COMMENT_FAILED,
        payload: errMsg
    }
}

export const addComment = (comment) => dispatch => {

    axios.post(url.commentsGit, comment)
        .then(res => res.data)
        .then(data => {
            dispatch(commentConcat(data))
        })
        .catch(err => {

            dispatch(addCommentFailed(err.message))
        })

}


const slidesIsLoading = () => {
    return {
        type: actions.LOADING_SLIDER
    }
}

const slidesLoad = (slides) => {
    return {
        type: actions.LOAD_SLIDER,
        payload: slides
    }
}


const slidesLoadFailed = (errMsg) => {
    return {
        type: actions.LOADING_SLIDER_FAILED,
        payload: errMsg
    }
}


export const fetchSlider = () => dispatch => {

    dispatch(slidesIsLoading())

    axios.get(url.slider)
        .then(res => res.data)
        .then(data => {
            dispatch(slidesLoad(data))
        })
        .catch(err => {
            console.log(err)
            dispatch(slidesLoadFailed(err.message))
        })
}
