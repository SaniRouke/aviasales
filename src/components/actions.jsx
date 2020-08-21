import { getSearchId, getData } from '../services/aviasalesApi';

export const setLoading = (isLoading) => ({ type: 'SET__LOADING', isLoading });

export const setData = () => async (dispatch) => {
  dispatch(setLoading(true));
  const id = await getSearchId();
  const tickets = await getData(id);
  dispatch({ type: 'SET__DATA', tickets });
  dispatch(setLoading(false));
};

export const sortCheapest = () => ({ type: 'SORT__CHEAPEST' });

export const sortFastest = () => ({ type: 'SORT__FASTEST' });

export const setCheckedList = (list) => ({ type: 'SET__CHECKED__LIST', list });

export const setCheckedAll = (checked) => ({ type: 'SET__CHECKED__ALL', checked });
