import { combineReducers } from 'redux';
import ajaxCallIsInProgress from './ajaxStatusReducers';
import { reducer as reducerForm } from 'redux-form';

const rootReducer = combineReducers({
  form: reducerForm,
  ajaxCallIsInProgress,
})
export default rootReducer;