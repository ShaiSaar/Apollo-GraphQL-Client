import { User } from "../types/User";
import { ActionsTypes, ActionsOptions } from "./actions";

export interface State {
    users: User[];
}

export const initialState: State = {
    users: [],
};



export const reducer = (state: State = initialState, action: ActionsOptions): State => {
    switch (action.type) {
      case ActionsTypes.ADD_USER:
        return {
            users: [
            ...state.users,
            action.user
          ]
        };
      case ActionsTypes.DELETE_USER: {
        const filteredUsers = state.users.filter(
          (user) => user._id !== action.userId
        );
        return { users: filteredUsers };
      }
      case ActionsTypes.UPDATE_USER: {
        const updatedusers = state.users.map((user) =>
          user._id === action.userId ? action.user: user
        );
        return { users: updatedusers };
      }
      case ActionsTypes.GET_USERS: {
        return { users: action.users };
      }
      default:
        return state;
    }
  };

  
