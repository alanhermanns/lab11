const URL = '/api';

export const getToDo = async() => {
    const url = `${URL}/todo`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};


export const addToDo = async(formData) => {
    const url = `${URL}/todo`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    });
    const data = await response.json();
    return data;
};