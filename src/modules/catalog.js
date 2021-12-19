import { categoryFilter } from "./filters";
import getData from "./getData";
import renderGoods from "./renderGoods";

const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button > button');


    let isOpen = false;

    btnCatalog.addEventListener('click', () => {
        const catalogModal = document.querySelector('.catalog');
        const catalogModalItems = document.querySelectorAll('.catalog-list  li');

        isOpen = !isOpen;
        if (isOpen) {
            catalogModal.style.display = 'block';
        }else {
            catalogModal.style.display = '';
        }
        
        catalogModalItems.forEach(item => {
            item.addEventListener('click', () => {
                let text = item.textContent;
                text = (text === 'Все товары') ? '' : text;
                getData().then((data) => {
                    renderGoods(categoryFilter(data, text));
                    catalogModal.style.display = '';
                    isOpen = false;
                });
            });

        });

    });
};

export default catalog;