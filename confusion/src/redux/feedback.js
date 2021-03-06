import * as ActionTypes from './actionTypes';

export const Feedback = (state = {
    errMess: null,
    feedback: []
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_FEEDBACK:
            var comment = action.payload;
            return { ...state, feedback: state.feedback.concat(feedback) };

        default:
            return state;
    }
}