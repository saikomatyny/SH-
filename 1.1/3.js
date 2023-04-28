
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


function AbstractProduct(ID, name, description, price, brand, activeSizes, quantity, reviews, images) { 

    this.ID = ID;
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.activeSizes = activeSizes;
    this.quantity = quantity;
    this.reviews = reviews;
    this.images = images;

    this.getFullInformation = function() {
        return `ID -- ${this.ID};\n
        Name -- ${this.name};\n
        Description -- ${this.description};\n
        Price -- ${this.price};\n
        Brand -- ${this.brand};\n
        Active sizes -- ${this.activeSizes};\n
        Quantity -- ${this.quantity};\n
        Reviews -- ${this.reviews};\n
        Images -- ${this.images};\n`;
    };
    this.getPriceForQuantity = function(n) {
        if (n > this.quantity) {
            while (n > this.quantity) {
                n = prompt(`your input is higher than quantity of good (${this.quantity})`)
            };
        };
        return `$${n * this.price} for ${n} good`
    };

    this.getID = function(){ 
        return this.ID;
    };
    this.getName = function() {
        return this.name;
    };
    this.setName = function(newName) {
        this.name = newName;
        return `name has been successfully to '${this.name}'`;
    };
    this.getDescription = function() {
        return this.description;
    };
    this.setDescription = function(newDesc) {
        this.description = newDesc;
        return `description has been successfully changed to '${this.description}'`;
    };
    this.getPrice = function() {
        return this.price;
    };
    this.setPrice = function(newPrice) {
        while (isNaN(newPrice) !== false) {newPrice = prompt('value has to be a NUMBER')}
        this.price = newPrice;
        return `price has been successfully changed to '${this.price}'`;
    };
    this.getBrand = function() {
        return this.brand;
    }
    this.setBrand = function(newBrand) {
        this.brand = newBrand;
        return `brand has been successfully changed to '${this.brand}'`;
    };
    this.getActiveSizes = function() {
        return this.activeSizes;
    };
    this.setActiveSizes = function(newAS) {
        newAS = newAS.split(', ');
        this.activeSizes = newAS;
    }
    this.getQuantity = function() {
        return this.quantity;
    };
    this.setQuantity = function(newQuantity) {
        while (isNaN(newQuantity) !== false) {newPrice = prompt('value has to be a NUMBER')}
        this.quantity = newQuantity;
        return `quantity has been successfully changed to '${this.quantity}'`;
    };
    this.getReviews = function() {
        return this.reviews;
    };
    this.addReview = function(newReview){ 
        this.reviews.push(newReview);
    };
    this.getImage = function(imageID) {
        if (imageID === undefined) {return this.images[0]} else {return this.images[imageID]};
    };
    this.addImage = function(imageURL){ 
        this.images.push(imageURL);
    };
    this.addSize = function(newSize) {
        this.activeSizes.push(newSize);
    };
    this.deleteSize = function(sizeID) {
        for (let i = 0; i < this.activeSizes.length; i++) {
            if (this.activeSizes[i] === sizeID) {
                this.activeSizes.splice(i, 1); 
                break; 
            };
        };
    };
    this.deleteReview = function(reviewID) {
        for (i = 0; i < this.reviews.length; i++) {
                if (this.reviews[i].ID === reviewID) {
                    this.reviews.splice(i, 1); 
                    break; 
                };
            };
    };
    this.getReviewByID = function(reviewID) {
        for (i of this.reviews) {
            if (i.ID === reviewID) {return i};
        };
    };
    this.getAverageRating = function() {
        let c = 0;
        for (i of this.reviews) {
            c += (i.rating.service + i.rating.value + i.rating.price + i.rating.quality) / 4;
        };
        return c;
    };

    this.SetterGetter = function(Set_or_Get, Function, value) {
        if (Set_or_Get === 'Set'){
            if (Function === 'name') {
                this.name = value;
                return `name has been successfully changed to ${this.name}`;
            } else if (Function === 'description') { 
                this.description = value;
                return `description has been successfully changed to ${this.description}`;
            } else if (Function === 'price') {
                this.price = value;
                return `price has been successfully changed to ${this.price}`;
            } else if (Function === 'brand') {
                this.brand = value;
                return `brand has been successfully changed to ${this.brand}`;
            } else if (Function === 'activeSizes') {
                value = value.split(', ');
                this.activeSizes = value;
                return `Active sizes has been successfully changed to ${this.activeSizes}`;
            } else if (Function === 'quantity') {
                this.quantity = value;
                return `quantity has been successfully changed to ${this.quantity}`;
            } else if (Function === 'reviews') {
                this.reviews.push(value);
                return `reviews has been successfully added: ${this.reviews}`;
            } else if (Function === 'images') {
                this.images.push(value);
                return `image has been successfully added: ${this.image}`;
            }

        } else if (Set_or_Get === 'Get') {
            if (Function === 'name') {
                return `Name -- ${this.name}`;
            } else if (Function === 'description') { 
                return `Description -- ${this.description}`;
            } else if (Function === 'price') {
                return `Price -- ${this.price}`;
            } else if (Function === 'brand') {
                return `Brand -- ${this.brand}`;
            } else if (Function === 'activeSizes') {
                return `Active sizes -- ${this.activeSizes}`;
            } else if (Function === 'quantity') {
                return `Quantity -- ${this.quantity}`;
            } else if (Function === 'reviews') {
                return `Reviews -- ${this.reviews}`;
            } else if (Function === 'images') {
                return `Images -- ${this.image}`;
            }
        };

    };
};

AbstractProduct();
let product4 = new AbstractProduct(4, 'artem', 'some arndom chelick', 4.30, 'idk', ['XS'], 200, [new Review(1, 'artem2', Date.now, "i'm artem", {'service' : 1, 'value': 2, 'price': 2, 'quality': 4})], []);
let product5 = new AbstractProduct(5, 'arthur', 'author of code', Infinity, 'mama', ['M', 'L'], 1, [new Review(1, 'saikomatyny', Date.now, "i'm saikomatyny, AKA Arthur Kham", {'service' : 5, 'value': 4, 'price': 4, 'quality': 5}), new Review(2, 'artem2', Date.now, "i'm artem", {'service' : 1, 'value': 2, 'price': 2, 'quality': 4})], ['test1', 'test2']);


class Clothes extends AbstractProduct {
    constructor(ID, name, description, price, brand, activeSizes, quantity, reviews, images, material, color) {
        super(ID, name, description, price, brand, activeSizes, quantity, reviews, images);
        this.material = material;
        this.color = color;
    };

    getMaterial() {
        return this.material;
    };
    setMaterial(newMaterial) {
        this.material = newMaterial;
        return `material has been successfully changed to '${this.material}'`
    };
    getColor() {
        return this.color;
    };
    setColor(newColor) {
        this.color = newColor;
        return `color has been successfully changed to '${this.color}'`
    };

};



class Electronics extends AbstractProduct {
    constructor(ID, name, description, price, brand, activeSizes, quantity, reviews, images, warranty, power) {
        super(ID, name, description, price, brand, activeSizes, quantity, reviews, images);
        this.warranty = warranty;
        this.power = power;
    };

    getWarranty() {
        return this.warranty;
    };
    setWarranty(newWarranty) {
        this.warranty = newWarranty;
        return `warranty has been successfully changed to '${this.warranty}'`
    };
    getPower() {
        return this.power;
    };
    setColor(newPower) {
        this.power = newPower;
        return `power has been successfully changed to '${this.power}'`
    };

};

let clothes1 = new Clothes(6, 'clothes1', 'kit', 1.1, 'sirko', ['XXL', 'XL'], 1, [new Review(1, 'CAT_1337', Date.now, "meow meow meow meow", {'service' : 2, 'value': 2, 'price': 3, 'quality': 4})], ['test23', 'test48'], 'skin', '3 colors');
let electronics1 = new Electronics(7, 'aipxon', 'kit', 1.1, 'sirko', ['XXL', 'XL'], 1, [new Review(1, 'CAT_1337', Date.now, "meow meow meow meow", {'service' : 2, 'value': 2, 'price': 3, 'quality': 4})], ['test23', 'test48'], '10.10.2028', '220 W');


let shop_banana_DPR_1 = new AbstractProduct(8, 'banan', 'smells like teen spirits', 200, 'Dushilin.INC', ['M', 'S'], 50000, [new Review(1, 'Maksim', '20.04.2023', 'thanks to the great leader the banana is delicious its fits', {'service' : 12, 'value' : 4.5, 'price' : 4.5, 'quality' : 5})], []);
/* 
to test functions you need to type command in this format {in this brackets i'll show you what to type or some tips}:

console.log({name of product}.{name of fucntion}({other options in format (option1, option2, etc...) if this setter or sort/search functions}));
*/
console.log(shop_banana_DPR_1.getPrice());
console.log(shop_banana_DPR_1.setPrice(150));
console.log(shop_banana_DPR_1.getPrice());
