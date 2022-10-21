import { AppDispatch, AppThunk } from '../../../store';
import { AppAction } from '../../../types/action';
import { GRAPH_API_SANDBOX_ENDPOINT_URL, GRAPH_API_SANDBOX_URL } from '../graph-constants';
import { SET_GRAPH_PROXY_URL } from '../redux-constants';

export const getGraphProxyUrl: AppThunk = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(GRAPH_API_SANDBOX_ENDPOINT_URL);
      if (!response.ok) {
        throw response;
      }
      const res = await response.json();
      return dispatch(setGraphProxyUrl(res));
    } catch (error) {
      return dispatch(setGraphProxyUrl(GRAPH_API_SANDBOX_URL));
    }
  };
}

export const setGraphProxyUrl = (response: string): AppAction => {
  return {
    type: SET_GRAPH_PROXY_URL,
    response
  };
}