/* eslint-disable import/prefer-default-import */
/* eslint-disable no-console */

const fetchData = async (url, method = 'GET', body, headers = {}) => {
    console.log('headers: ', headers);
    let res;
    if (method === 'GET') {
        res = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        });
    } else {
        res = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
    }
    const data = await res.json();
    console.log('sss', data);
    if (res.status !== 200 && res.status !== 201 && res.status !== 204) {
        console.log(`res.status`, res.status);
        throw data;
    }
    return data;
};

const verifyAuth = async (token) => {
    try {
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const results = await fetchData(
            'http://localhost:4000/api/user',
            'GET',
            {},
            headers
        );
        console.log('results', results);
        return results;
    } catch (err) {
        console.log('hey in verify auth');
        throw new Error(err);
    }
};

export { fetchData, verifyAuth };
