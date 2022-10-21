import { AppAction } from '../../types/action';
import { CHANGE_THEME_SUCCESS } from '../services/redux-constants';
import { saveTheme } from '../../themes/theme-utils';

const localStorageMiddleware = () => (next: any) => (action: AppAction) => {
  if (action.type === CHANGE_THEME_SUCCESS) {
    saveTheme(action.response);
  }
  return next(action);
};

export default localStorageMiddleware;
