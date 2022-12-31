import {useReducer, createContext} from 'react';
import {initialState, reducer, State } from './reducer';
import {ActionsTypes} from './actions';
import { User } from '../types/User';

interface Context {
  users: User[];
  addUserSuccess: (user: User) => void;
  deleteUserSuccess: (userId: string) => void;
  updateUserSuccess: (userId: string, user: User) => void;
  getAllUsersSuccess: (users: User[]) => void;
}
export const UsersContext = createContext({} as Context);

export const StoreProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const value: Context = {
    users: (state as State).users,
    addUserSuccess: (user: User) => {
      dispatch({ type: ActionsTypes.ADD_USER, user: user });
    },
    deleteUserSuccess: (userId) => {
      dispatch({ type: ActionsTypes.DELETE_USER, userId });
    },
    updateUserSuccess: (userId: string, user: User) => {
      dispatch({ type: ActionsTypes.UPDATE_USER, userId, user });
    },
    getAllUsersSuccess: (users: User[]) => {
      dispatch({ type: ActionsTypes.GET_USERS, users });
    }
  };

  return (
    <UsersContext.Provider value={value}> 
      {children}
    </UsersContext.Provider>
  )

};