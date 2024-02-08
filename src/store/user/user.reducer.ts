import { AnyAction } from 'redux';
import { UserData } from '../../utils/firebase/firebase.utils.ts';
import { signInSuccess,signOutSuccess,signOutFailed,signUpFailed,signInFailed } from './user.action.ts';


export type UserState={
  readonly currentUser:UserData[]|null;
  readonly isLoading: Boolean,
  readonly error:Error|null;

}

const USER_INITIAL_STATE:UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action :AnyAction) => {

if (signInSuccess.match(action)){
  return {
    ...state, currentUser: action.payload
  }
}
if (signOutSuccess.match(action)){
  return {
    ...state, currentUser: null
  }
}
if (signOutFailed.match(action)||signUpFailed.match(action)||signInFailed.match(action)){
  return {
    ...state, error: action.payload
  }
}

return state;

};
