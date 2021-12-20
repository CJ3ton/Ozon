const counterRender = () => {
    const counter = document.querySelector('.counter');

    const cart = localStorage.getItem('cart') ? 
                JSON.parse(localStorage.getItem('cart')) : [];
    const count = cart.length;

    counter.textContent = count;
};

export default counterRender;