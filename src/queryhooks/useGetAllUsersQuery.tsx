import { useLazyQuery } from '@apollo/client';
import { useContext } from 'react';
import { GET_ALL_USERS } from '../api/usersQuries';
import { UsersContext } from '../state/store';

export default function useGetUsers() {
    const { getAllUsersSuccess } = useContext(UsersContext);
    return useLazyQuery(GET_ALL_USERS, {
        onCompleted: (queryData) => {getAllUsersSuccess(queryData.getUsers)},
    });
}