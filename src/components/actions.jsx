import { getSearchId, getData } from '../services/aviasalesApi';

export const setLoading = (isLoading) => ({ type: 'SET__LOADING', isLoading });
export const setError = (error) => ({ type: 'SET__ERROR', error });

export const setData = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const id = await getSearchId();
    const tickets = await getData(id);
    dispatch({ type: 'SET__DATA', tickets });
  } catch (err) {
    dispatch(setError(err));
    return [];
  } finally {
    dispatch(setLoading(false));
  }
  return [];
};

export const sortCheapest = () => ({ type: 'SORT__CHEAPEST' });

export const sortFastest = () => ({ type: 'SORT__FASTEST' });

export const setCheckedList = (list) => ({ type: 'SET__CHECKED__LIST', list });

export const setCheckedAll = (checked) => ({ type: 'SET__CHECKED__ALL', checked });
