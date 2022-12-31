import { useMutation } from '@apollo/client';
import { useContext } from 'react';

import { ADD_USER } from '../api/usersQuries';
import { User } from '../types/User';
import { UsersContext } from '../state/store';
import useSnackbar, {Types as SnackbarTypes} from '../hooks/useSnackbar';


export default function useCreateUser (user: Partial<User>) {
    const {openSnackBarHandler} = useSnackbar();
    const { addUserSuccess } = useContext(UsersContext);
    return useMutation(ADD_USER, {
        variables: { userInput: { name: user.name, workStatus: user.workStatus, img: user.img} },
        onCompleted: (queryData) => {
            addUserSuccess(queryData.createUser);
            openSnackBarHandler(`A new user was added`, SnackbarTypes.SUCCESS);
        },
        onError: (error ) => {
            openSnackBarHandler(`Error has accoured while trying to create the user`, SnackbarTypes.ERROR);
        },
    });

}