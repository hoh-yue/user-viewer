import { combineReducers } from "redux";
import * as userListActions from "./actions";

const initialState = {
    users: [],
    selectedUser: null,
    avatar: null,
    userListLoading: false,
    avatarLoading: false,
};

const users = (state = initialState.users, action) => {
    switch (action.type) {
        case userListActions.GET_USER_LISTS_SUCCESS:
            return action.payload;

        default:
            return state;
    }
};

const selectedUser = (state = initialState.selectedUser, action) => {
    switch (action.type) {
        case userListActions.SELECT_USER:
            return action.payload;

        default:
            return state;
    }
};

const avatar = (state = initialState.avatar, action) => {
    switch (action.type) {
        case userListActions.GET_USER_AVATAR_SUCCESS:
            return action.payload;

        default:
            return state;
    }
};

const userListLoading = (state = initialState.userListLoading, action) => {
    switch (action.type) {
        case userListActions.GET_USER_LISTS_REQUEST:
            return true;

        case userListActions.GET_USER_LISTS_SUCCESS:
            return false;

        default:
            return state;
    }
};

const avatarLoading = (state = initialState.avatarLoading, action) => {
    switch (action.type) {
        case userListActions.GET_USER_AVATAR_REQUEST:
            return true;

        case userListActions.GET_USER_AVATAR_SUCCESS:
            return false;

        default:
            return state;
    }
};

export default combineReducers({
    users,
    selectedUser,
    avatar,
    userListLoading,
    avatarLoading,
});
