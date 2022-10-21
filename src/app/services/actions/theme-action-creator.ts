import { Dispatch } from 'redux';

import { AppAction } from '../../../types/action';
import { CHANGE_THEME_SUCCESS } from '../redux-constants';

export const changeThemeSuccess = (response: string): AppAction => {
  return {
    type: CHANGE_THEME_SUCCESS,
    response
  };
}

export const changeTheme = (theme: string) => {
  return (dispatch: Dispatch) => {
    dispatch(changeThemeSuccess(theme));
  };
}
