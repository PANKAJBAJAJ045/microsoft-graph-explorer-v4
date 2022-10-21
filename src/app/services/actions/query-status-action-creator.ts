import { Dispatch } from 'redux';
import { AppAction } from '../../../types/action';
import { CLEAR_QUERY_STATUS, CLEAR_RESPONSE, QUERY_GRAPH_STATUS } from '../redux-constants';

export const setQueryResponseStatus = (response: object): AppAction => {
  return {
    type: QUERY_GRAPH_STATUS,
    response
  };
}

export const clearResponse = () => {
  return {
    type: CLEAR_RESPONSE
  };
}


export const clearQueryStatus = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: CLEAR_QUERY_STATUS
    });
  };
}

