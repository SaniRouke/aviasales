import { getSearchId, getData } from '../services/aviasalesApi';

export const setLoading = (isLoading) => ({ type: 'SET__LOADING', isLoading });
export const setProgress = (progress) => ({ type: 'SET__PROGRESS', progress });
export const setError = (error) => ({ type: 'SET__ERROR', error });

export const setData = () => async (dispatch) => {
  dispatch(setLoading(true));
  let id;
  try {
    id = await getSearchId();
  } catch (err) {
    dispatch(setError(err));
    dispatch(setProgress(100));
    dispatch(setLoading(false));
    return;
  }
  const maxCalls = 30;
  for (let i = 1; i <= maxCalls; i++) {
    try {
      // eslint-disable-next-line
      const tickets = await getData(id);
      if (tickets === false) {
        dispatch(setProgress(100));
        break;
      }
      dispatch({ type: 'SET__DATA', tickets });
      dispatch(setProgress((i * 100) / maxCalls));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  }
};

export const sortCheapest = () => ({ type: 'SORT__CHEAPEST' });

export const sortFastest = () => ({ type: 'SORT__FASTEST' });

export const setCheckedList = (list) => ({ type: 'SET__CHECKED__LIST', list });

export const setCheckedAll = (checked) => ({ type: 'SET__CHECKED__ALL', checked });
