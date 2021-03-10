import { createSelector } from 'reselect';

const usersSelector = (state) => state.userList.users;
const selectedUserSelector = (state) => state.userList.selectedUser;
export const avatarSelector = (state) => state.userList.avatar;
export const userLoadingSelector = (state) => state.userList.userListLoading;
export const avatarLoadingSelector = (state) => state.userList.avatarLoading;

export const usersWithUsernameAndEmailSelector = createSelector(
    usersSelector, 
    (users) => {
        if (users?.length > 0) {
            return users.map(user => ({ id: user?.id, username: user?.username, email: user?.email }));
        }
        return [];
    },
);

export const selectedUserDetailsSelector = createSelector(
    usersSelector, 
    selectedUserSelector,
    (users, selectedUser) => {
        if (users?.length > 0) {
            return users?.filter(user => user.id === selectedUser)[0];
        }
        return null;
    },
);
