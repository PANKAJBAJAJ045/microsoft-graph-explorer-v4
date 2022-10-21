import { authenticationWrapper } from '../../../modules/authentication';
import { AppDispatch, AppThunk } from '../../../store';
import { AppAction } from '../../../types/action';
import { Mode } from '../../../types/enums';
import {
  AUTHENTICATION_PENDING, GET_AUTH_TOKEN_SUCCESS, GET_CONSENTED_SCOPES_SUCCESS,
  LOGOUT_SUCCESS
} from '../redux-constants';

export function getAuthTokenSuccess(response: boolean): AppAction {
  return {
    type: GET_AUTH_TOKEN_SUCCESS,
    response
  };
}

export function getConsentedScopesSuccess(response: string[]): AppAction {
  return {
    type: GET_CONSENTED_SCOPES_SUCCESS,
    response
  };
}

export function signOutSuccess(response: boolean): AppAction {
  return {
    type: LOGOUT_SUCCESS,
    response
  };
}

export function setAuthenticationPending(response: boolean): AppAction {
  return {
    type: AUTHENTICATION_PENDING,
    response
  };
}

export const signOut: AppThunk = () => {
  return (dispatch: AppDispatch, getState: Function): AppAction => {
    const { graphExplorerMode } = getState();
    dispatch(setAuthenticationPending(true));
    if (graphExplorerMode === Mode.Complete) {
      authenticationWrapper.logOut();
    } else {
      authenticationWrapper.logOutPopUp();
    }
    return dispatch(signOutSuccess(true));
  };
}

export const signIn: AppThunk = () => {
  return (dispatch: AppDispatch): AppAction => {
    return dispatch(getAuthTokenSuccess(true));
  }
}

export const storeScopes: AppThunk = (consentedScopes: string[]) => {
  return (dispatch: AppDispatch): AppAction => {
    return dispatch(getConsentedScopesSuccess(consentedScopes));
  }
}
