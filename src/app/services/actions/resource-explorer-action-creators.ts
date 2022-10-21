import { AppAction } from '../../../types/action';
import {
  FETCH_RESOURCES_SUCCESS, FETCH_RESOURCES_PENDING,
  FETCH_RESOURCES_ERROR, RESOURCEPATHS_ADD_SUCCESS, RESOURCEPATHS_DELETE_SUCCESS
} from '../redux-constants';
import { IResource } from '../../../types/resources';
import { ApplicationState } from '../../../types/root';
import { IRequestOptions } from '../../../types/request';
import { AppDispatch, AppThunk } from '../../../store';

export const fetchResourcesSuccess = (response: object): AppAction => {
  return {
    type: FETCH_RESOURCES_SUCCESS,
    response
  };
}

export const fetchResourcesPending = (): AppAction => {
  return {
    type: FETCH_RESOURCES_PENDING,
    response: null
  };
}

export const fetchResourcesError = (response: object): AppAction => {
  return {
    type: FETCH_RESOURCES_ERROR,
    response
  };
}

export const addResourcePaths = (response: object): AppAction => {
  return {
    type: RESOURCEPATHS_ADD_SUCCESS,
    response
  };
}

export function removeResourcePaths(response: object): AppAction {
  return {
    type: RESOURCEPATHS_DELETE_SUCCESS,
    response
  };
}

export const fetchResources: AppThunk = () => {
  return async (dispatch: AppDispatch, getState: Function) => {
    try {
      const { devxApi }: ApplicationState = getState();
      const resourcesUrl = `${devxApi.baseUrl}/openapi/tree`;

      const headers = {
        'Content-Type': 'application/json'
      };

      const options: IRequestOptions = { headers };

      dispatch(fetchResourcesPending());

      const response = await fetch(resourcesUrl, options);
      if (response.ok) {
        const resources = await response.json() as IResource;
        return dispatch(fetchResourcesSuccess(resources));
      }
      throw response;
    } catch (error) {
      return dispatch(fetchResourcesError({ error }));
    }
  };
}