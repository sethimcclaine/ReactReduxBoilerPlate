import ACTION_TYPES from './action-types';

import { postHipChat } from 'src/utils/api';

export const setAppState = (payload) =>
    (dispatch) => dispatch({
        type: ACTION_TYPES.SET_APP_STATE,
        payload,
    });

export const updateUserInfo = (payload) =>
    (dispatch)  => dispatch({
        type: ACTION_TYPES.UPDATE_USER_INFO,
        payload,
    });

export const messageHipChat = (payload) =>
    (dispatch) => postHipChat(payload)
        .then((response) => {
            dispatch({ type: ACTION_TYPES.HIPCHAT_RESPONSE, response });
        })
        .catch(() => {
            dispatch({ type: ACTION_TYPES.ACTION_FAILED });
        });
