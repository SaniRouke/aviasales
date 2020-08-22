export const getSearchId = async () => {
  const response = await fetch('https://front-test.beta.aviasales.ru/search');
  return response.json();
};

export const getData = async (id) => {
  const response = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id.searchId}`);
  if (!response.ok) {
    return [];
  }
  const { tickets, stop } = await response.json();
  if (stop) {
    return false;
  }
  return tickets;
};
