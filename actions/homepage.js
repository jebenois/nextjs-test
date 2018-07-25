import { CONTENTFUL_SUCCESS } from './';
import { getModules } from '../lib/contentful';

export const fetchContenfulData = () => async dispatch => {
  const data = await getModules();
  return dispatch({ type: CONTENTFUL_SUCCESS, data })
}
