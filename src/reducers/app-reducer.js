import ACTION_TYPES from 'src/actions/action-types';
import {
    merge,
} from 'ramda';


const INITIAL_APP_STATE = {
    userName: 'User',
    firstName: 'fName',
    lastName: 'lName',
};

const appReducer = (state = INITIAL_APP_STATE, { type, payload }) => {
    switch (type) {
    case ACTION_TYPES.SET_APP_STATE:
        return payload;

    case ACTION_TYPES.UPDATE_USER_INFO:
        return merge(state, payload);

    default:
        return state;
    }
};

export default appReducer;
