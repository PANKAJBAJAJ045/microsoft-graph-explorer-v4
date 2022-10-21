import { SignContext, suggestions } from '../../../modules/suggestions';
import { AppDispatch, AppThunk } from '../../../store';
import { AppAction } from '../../../types/action';
import {
  AUTOCOMPLETE_FETCH_ERROR,
  AUTOCOMPLETE_FETCH_PENDING,
  AUTOCOMPLETE_FETCH_SUCCESS
} from '../redux-constants';

export const fetchAutocompleteSuccess = (response: object): AppAction => {
  return {
    type: AUTOCOMPLETE_FETCH_SUCCESS,
    response
  };
}

export const fetchAutocompleteError = (response: object): AppAction => {
  return {
    type: AUTOCOMPLETE_FETCH_ERROR,
    response
  };
}

export const fetchAutocompletePending = (): AppAction => {
  return {
    type: AUTOCOMPLETE_FETCH_PENDING,
    response: null
  };
}

export const fetchAutoCompleteOptions: AppThunk = (url: string, version: string, context: SignContext = 'paths') => {
  return async (dispatch: AppDispatch, getState: Function) => {
    const devxApiUrl = getState().devxApi.baseUrl;
    const resources = getState().resources.data;
    dispatch(fetchAutocompletePending());
    const autoOptions = await suggestions.getSuggestions(
      url,
      devxApiUrl,
      version,
      context,
      resources
    );
    if (autoOptions) {
      return dispatch(fetchAutocompleteSuccess(autoOptions));
    }
    return dispatch(fetchAutocompleteError({}));
  };
}
