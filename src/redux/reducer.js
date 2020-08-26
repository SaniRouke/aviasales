const reducerFilters = (
  filter = {
    checkedList: [],
    checkAll: true,
  },
  action
) => {
  switch (action.type) {
    case 'SET__CHECKED__LIST':
      return { ...filter, checkedList: action.list };
    case 'SET__CHECKED__ALL':
      return { ...filter, checkAll: action.checked };
    default:
      return filter;
  }
};

const reducerSort = (sort = 'cheapest', action) => {
  switch (action.type) {
    case 'SORT__CHEAPEST':
      return 'cheapest';

    case 'SORT__FASTEST':
      return 'fastest';

    default:
      return sort;
  }
};

const reducerData = (data = [], action) => {
  switch (action.type) {
    case 'SET__DATA':
      return [...data, ...action.tickets];

    default:
      return data;
  }
};

const reducerLoading = (loading = true, action) => {
  switch (action.type) {
    case 'SET__LOADING':
      return action.isLoading;

    default:
      return loading;
  }
};
const reducerProgress = (progress = 0, action) => {
  switch (action.type) {
    case 'SET__PROGRESS':
      return action.progress;

    default:
      return progress;
  }
};
const reducerError = (error = null, action) => {
  switch (action.type) {
    case 'SET__ERROR':
      return action.error;

    default:
      return error;
  }
};

const reducer = (state = {}, action) => {
  return {
    isLoading: reducerLoading(state.isLoading, action),
    progress: reducerProgress(state.progress, action),
    error: reducerError(state.error, action),
    data: reducerData(state.data, action),
    sort: reducerSort(state.sort, action),
    filter: reducerFilters(state.filter, action),
  };
};

export default reducer;
