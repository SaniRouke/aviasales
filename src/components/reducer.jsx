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

const reducerSort = (
  state = {
    sort: 'cheapest',
  },
  action
) => {
  switch (action.type) {
    case 'SORT__CHEAPEST':
      return { ...state, sort: 'cheapest' };

    case 'SORT__FASTEST':
      return { ...state, sort: 'fastest' };

    default:
      return state;
  }
};

const reducerData = (data = [], action) => {
  switch (action.type) {
    case 'SET__DATA':
      return action.tickets;

    default:
      return data;
  }
};

const reducerLoading = (data = true, action) => {
  switch (action.type) {
    case 'SET__LOADING':
      return action.isLoading;

    default:
      return data;
  }
};

const reducer = (state = {}, action) => {
  return {
    isLoading: reducerLoading(state.isLoading, action),
    data: reducerData(state.data, action),
    sort: reducerSort(state.sort, action),
    filter: reducerFilters(state.filter, action),
  };
};

export default reducer;
