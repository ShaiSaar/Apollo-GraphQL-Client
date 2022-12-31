import { User } from './../types/User';

export enum ActionsTypes {
    ADD_USER= "ADD_USER",
    DELETE_USER= "DELETE_USER",
    UPDATE_USER= "UPDATE_USER",
    GET_USERS= "GET_USERS",
  };
  
type AddUserAction = { type: ActionsTypes.ADD_USER ; user: User; }
type DeleteUserAction = { type: ActionsTypes.DELETE_USER; userId: string; }
type UpdateUserAction = { type: ActionsTypes.UPDATE_USER; userId: string, user: User; }
type GetAllUsersAction = { type: ActionsTypes.GET_USERS; users: User[] }

export type ActionsOptions = AddUserAction | DeleteUserAction | UpdateUserAction | GetAllUsersAction