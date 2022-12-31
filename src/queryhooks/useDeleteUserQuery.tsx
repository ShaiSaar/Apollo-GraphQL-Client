import { useMutation } from '@apollo/client';
import { useContext } from 'react';

import { DELETE_USER } from '../api/usersQuries';
import useSnackbar, {Types as SnackbarTypes} from '../hooks/useSnackbar';
import { UsersContext } from '../state/store';


export default function useDeleteUser (userId: string) {
    const {openSnackBarHandler} = useSnackbar();
    const { deleteUserSuccess } = useContext(UsersContext);
    return useMutation(DELETE_USER, {
        variables: { id: userId },
        onCompleted: (queryData) => {deleteUserSuccess(userId)},
        onError: (error ) => {
            openSnackBarHandler(`Error has accoured while trying to delete the user`, SnackbarTypes.ERROR)
        },
    });
}