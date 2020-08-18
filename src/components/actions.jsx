export const sortCheapest = () => ({ type: 'SORT__CHEAPEST' });

export const sortFastest = () => ({ type: 'SORT__FASTEST' });

export const setAll = (bool) => ({ type: 'FILTER__UN-ALL', bool });
export const setWithout = (bool) => ({ type: 'FILTER__UN-WITHOUT', bool });
export const setOne = (bool) => ({ type: 'FILTER__UN-ONE', bool });
export const setTwo = (bool) => ({ type: 'FILTER__UN-TWO', bool });
