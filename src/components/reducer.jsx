const reducerFilters = (
  filters = {
    all: true,
    without: true,
    one: true,
    two: true,
  },
  action
) => {
  switch (action.type) {
    case 'FILTER__UN-ALL':
      if (action.bool === true) {
        return { ...filters, all: true };
      }
      if (action.bool === false) {
        return { ...filters, all: false };
      }
      return { ...filters, all: !filters.all };
    case 'FILTER__UN-WITHOUT':
      if (action.bool === true) {
        return { ...filters, without: true };
      }
      if (action.bool === false) {
        return { ...filters, without: false };
      }
      return { ...filters, without: !filters.without };
    case 'FILTER__UN-ONE':
      if (action.bool === true) {
        return { ...filters, one: true };
      }
      if (action.bool === false) {
        return { ...filters, one: false };
      }
      return { ...filters, one: !filters.one };
    case 'FILTER__UN-TWO':
      if (action.bool === true) {
        return { ...filters, two: true };
      }
      if (action.bool === false) {
        return { ...filters, two: false };
      }
      return { ...filters, two: !filters.two };
    default:
      return filters;
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

const reducer = (state = {}, action) => {
  return {
    sort: reducerSort(state.sort, action),
    filters: reducerFilters(state.filters, action),
  };
};
export default reducer;
