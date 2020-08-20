// export const setData = (data) => ({ type: 'SET__DATA', data });
export const setData = () => async (dispatch) => {
  const idResponse = await fetch('https://front-test.beta.aviasales.ru/search');
  const id = await idResponse.json();
  const dataResponse = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id.searchId}`);
  const { tickets } = await dataResponse.json();
  dispatch({ type: 'SET__DATA', tickets });
};

export const sortCheapest = () => ({ type: 'SORT__CHEAPEST' });

export const sortFastest = () => ({ type: 'SORT__FASTEST' });

export const setCheckedList = (list) => ({ type: 'SET__CHECKED__LIST', list });

export const setCheckedAll = (checked) => ({ type: 'SET__CHECKED__ALL', checked });
