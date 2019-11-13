const URL = '/api';

export const getToDo = async() => {
    const url = `${URL}/todo`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};


export const addToDo = async(name, body) => {
    const url = `${URL}/todo`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            body: body,
            done: false
        })
    });
    const data = await response.json();
    return data;
};

export const deleteToDo = async(id) => {
    const url = `${URL}/todo/${id}`;
    const response = await fetch(url, {
        method: 'DELETE'
    });
    const data = await response.json();
    return data;
};