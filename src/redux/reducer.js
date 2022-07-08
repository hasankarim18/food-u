import DISHES from '../data/dishes'
import COMMENTS from '../data/comments'
import * as actions from './actionTypes'

const initialStae = {
    dishes: DISHES,
    comments: COMMENTS,
    homeTitle: 'Visit Food U Restaurent'
}

const Reducer = (state = initialStae, action) => {
    // console.log(action)
    switch (action.type) {
        case actions.HEADING_CHANGE:
            return {
                ...state, // copy of main state it is necessary
                homeTitle: state.homeTitle + action.payload
            }
        default:
            return state
    }

}


export { Reducer }