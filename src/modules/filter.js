import { priceFilter, hotsaleFilter } from "./filters";
import getData from "./getData";
import renderGoods from "./renderGoods";

const filter = () => {
    const minInput = document.querySelector('#min');
    const maxInput = document.querySelector('#max');
    const discount = document.querySelector('#discount-checkbox');
    const check = document.querySelector('.filter-check_checkmark');

    minInput.value = '';
    maxInput.value = '';

    minInput.addEventListener('input', (event) => {
        getData().then((data) => {
            renderGoods(priceFilter(hotsaleFilter(data, discount.checked), minInput.value, maxInput.value));
        });
    });

    maxInput.addEventListener('input', (event) => {
        getData().then((data) => {
            renderGoods(priceFilter(hotsaleFilter(data, discount.checked), minInput.value, maxInput.value));
        });
    });

    discount.addEventListener('change', () => {       
        if(discount.checked) {
            check.classList.add('checked');
        }else {
            check.classList.remove('checked');
        }
        
        getData().then((data) => {
            renderGoods(priceFilter(hotsaleFilter(data, discount.checked), minInput.value, maxInput.value));
        });
    });

};

export default filter;