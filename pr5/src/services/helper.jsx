let getData = () => {

    let data = JSON.parse(localStorage.getItem('data'));

    if (data !== null) {
        return data;
    } else {
        return [];
    }

};

export default getData