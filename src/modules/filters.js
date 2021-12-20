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

export const priceFilter = (goods, min, max) => {
    console.log(min, max);
    return goods.filter((goodsItem) => {
        if(min === '' && max ==='') {
            return goodsItem;
        }else if(min !== '' && max !== ''){
            return   goodsItem.price >= +min && goodsItem.price <= +max;
        }else if(min === '' && max !== ''){
            return goodsItem.price <= +max;
        }else if(min !== '' && max === ''){
            return goodsItem.price >= +min;
        }
        
    });
};

export const hotsaleFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        if(value){
            return goodsItem.sale === true;
        }else{
            return goodsItem;
        }
    });
};