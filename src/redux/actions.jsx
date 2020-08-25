import { getSearchId, getData } from '../services/aviasalesApi';

const SET__LOADING = 'SET__LOADING';
const SET__PROGRESS = 'SET__PROGRESS';
const SET__ERROR = 'SET__ERROR';
const SET__DATA = 'SET__DATA';
const SORT__CHEAPEST = 'SORT__CHEAPEST';
const SORT__FASTEST = 'SORT__FASTEST';
const SET__CHECKED__LIST = 'SET__CHECKED__LIST';
const SET__CHECKED__ALL = 'SET__CHECKED__ALL';

export const setLoading = (isLoading) => ({ type: SET__LOADING, isLoading });
export const setProgress = (progress) => ({ type: SET__PROGRESS, progress });
export const setError = (error) => ({ type: SET__ERROR, error });

export const setData = () => async (dispatch) => {
  dispatch(setLoading(true));
  let responseWithId;
  try {
    responseWithId = await getSearchId();
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
      const { tickets, stop } = await getData(responseWithId.searchId);
      if (stop) {
        dispatch(setProgress(100));
        break;
      }
      dispatch({ type: SET__DATA, tickets: tickets || [] });
      dispatch(setProgress((i * 100) / maxCalls));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  }
};

export const sortCheapest = () => ({ type: SORT__CHEAPEST });

export const sortFastest = () => ({ type: SORT__FASTEST });

export const setCheckedList = (list) => ({ type: SET__CHECKED__LIST, list });

export const setCheckedAll = (checked) => ({ type: SET__CHECKED__ALL, checked });
