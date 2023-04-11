
function Products(name_input, description_input, price_input, brand_input, activeSizes_input, quantity_input, reviews_input, images_input) {

    let a = new Date()
    let date_addProduct = a.toLocaleString();
    activeSizes = activeSizes_input.split(', ');
    

    let name = {
        set setName(name_input) {
            name = name_input
        }
    }



    return name
}


console.log(Products(prompt('Type name of product: '), 
prompt('Type description of product'), 
prompt('Type price of product: '),
prompt('Type brand of product: '), 
prompt('Type available sizes of product: ', 'XS, S, M, L, XL, XXL'),
prompt('Type count of available good: '),
quantity,
images))