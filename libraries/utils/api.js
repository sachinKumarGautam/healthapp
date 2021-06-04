/* eslint-disable import/prefer-default-import */
/* eslint-disable no-console */

const fetchData = async (url, method = 'GET', body) => {
  console.log('body: ', body);
  let res;
  if (method === 'GET') {
    res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } else {
    res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }
  const data = await res.json();
  return data;
};

export default fetchData;
