const postData = () => {
    return fetch('https://test-49003-default-rtdb.europe-west1.firebasedatabase.app/goods.json', {
        method: 'POST',
        body: JSON.stringify({
            title: "S.T.A.L.K.E.R. 2",
            price: 2399,
            sale: true,
            img: "https://cdn1.ozone.ru/s3/multimedia-9/6103131801.jpg",
            hoverImg: "https://cdn1.ozone.ru/s3/multimedia-9/6103131801.jpg",
            category: "Игры и софт",
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

};

export default postData;