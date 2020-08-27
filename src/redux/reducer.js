import { combineReducers } from 'redux';

const filter = (
  state = {
    checkedList: [],
    checkAll: true,
  },
  action
) => {
  switch (action.type) {
    case 'SET__CHECKED__LIST':
      return { ...state, checkedList: action.list };
    case 'SET__CHECKED__ALL':
      return { ...state, checkAll: action.checked };
    default:
      return state;
  }
};

const sort = (state = 'cheapest', action) => {
  switch (action.type) {
    case 'SORT__CHEAPEST':
      return 'cheapest';

    case 'SORT__FASTEST':
      return 'fastest';

    default:
      return state;
  }
};

const data = (state = [], action) => {
  switch (action.type) {
    case 'SET__DATA':
      return [...state, ...action.tickets];

    default:
      return state;
  }
};

const isLoading = (state = true, action) => {
  switch (action.type) {
    case 'SET__LOADING':
      return action.isLoading;

    default:
      return state;
  }
};
const progress = (state = 0, action) => {
  switch (action.type) {
    case 'SET__PROGRESS':
      return action.progress;

    default:
      return state;
  }
};
const error = (state = null, action) => {
  switch (action.type) {
    case 'SET__ERROR':
      return action.error;

    default:
      return state;
  }
};

const reducer = combineReducers({
  isLoading,
  progress,
  error,
  data,
  sort,
  filter,
});

export default reducer;
