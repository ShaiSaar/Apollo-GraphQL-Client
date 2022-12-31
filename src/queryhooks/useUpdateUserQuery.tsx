import { useMutation } from '@apollo/client';
import { useContext } from 'react';

import { UPDATE_USER } from '../api/usersQuries';
import { User } from '../types/User';
import { UsersContext } from '../state/store';
import useSnackbar, {Types as SnackbarTypes} from '../hooks/useSnackbar';


export const setUserVariables = (user: User, newWorkStatus: string) => ({variables: { id: user._id, userInput: { name: user.name, workStatus: newWorkStatus, img: user.img} }})

export default function useUpdateUser () {
    const {openSnackBarHandler} = useSnackbar();
    const { updateUserSuccess } = useContext(UsersContext);
    return useMutation(UPDATE_USER, {
        onCompleted: (queryData) => {updateUserSuccess(queryData.updateUser.__id, queryData.updateUser)},
        onError: (error ) => {openSnackBarHandler(`Error has accoured while trying to update the user`, SnackbarTypes.ERROR)},
    });
}