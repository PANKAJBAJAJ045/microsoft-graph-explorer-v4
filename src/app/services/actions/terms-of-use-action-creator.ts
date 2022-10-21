import { Dispatch } from 'redux';

import { AppThunk } from '../../../store';
import { AppAction } from '../../../types/action';
import { CLEAR_TERMS_OF_USE } from '../redux-constants';

const termsOfUseSuccess = (): AppAction => {
  return {
    type: CLEAR_TERMS_OF_USE,
    response: null
  }
}

export const clearTermsOfUse: AppThunk = () => {
  return (dispatch: Dispatch) => {
    dispatch(termsOfUseSuccess());
  };
}