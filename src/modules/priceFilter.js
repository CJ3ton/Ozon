import { priceFilter } from "./filters";
import getData from "./getData";
import renderGoods from "./renderGoods";

const filterPrice = () => {
    const priceFrom = document.querySelector('#min');
    const priceTo = document.querySelector('#max');
    const discount = document.querySelector('#discount-checkbox');
    const check = document.querySelector('.filter-check_checkmark');
    
    var price1, price2, isChecked, sale;

    sale = isChecked = false;
    priceFrom.value = '';
    priceTo.value = '';

    priceFrom.addEventListener('input', (event) => {
        price1 = parseInt(event.target.value);
        applyFilter();
    });

    priceTo.addEventListener('input', (event) => {
        price2 = parseInt(event.target.value);
        applyFilter();
    });

    discount.addEventListener('click', () => {       
        check.classList.toggle('checked');
        isChecked = !isChecked;
        sale = isChecked ? true : false;
        applyFilter();
    });

    const applyFilter = () => {
        price1 = price1 ? price1 : 0;
        price2 = price2 ? price2 : 0;
        getData().then((data) => {
            console.log(price1, price2);
            renderGoods(priceFilter(data, price1, price2, sale));
        });
    };

};

export default filterPrice;