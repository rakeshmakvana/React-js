export const add = (data) => {

    return {
        type: 'ADD',
        payload: data
    }

};

export const single = (id) => {

    return {
        type: 'SINGLE',
        payload: id
    }

};

export const update = (data) => {

    return {
        type: 'UPDATE',
        payload: data
    }

};

export const delet = (id) => {

    return {
        type: 'DELETE',
        payload: id
    }

};