const getData = () => {
    return fetch('https://test-49003-default-rtdb.europe-west1.firebasedatabase.app/goods.json')
    .then((response) => {
        return response.json();
    });
    
};

export default getData;