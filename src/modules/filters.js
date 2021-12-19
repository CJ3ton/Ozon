export const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase());
    });
};

export const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category.includes(value);
    });
};

export const priceFilter = (goods, prFrom, prTo, sale) => {
    return goods.filter((goodsItem) => {
        if(sale == true) {
        return (goodsItem.price >= prFrom) && (goodsItem.price <= prTo) && (goodsItem.sale == true);
        }
        else {
            return (goodsItem.price >= prFrom) && (goodsItem.price <= prTo);
        }
    });
};