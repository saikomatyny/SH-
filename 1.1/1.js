

function Products(ID, name, description, price, brand, activeSizes, quantity, reviews, images) {
    counterID += 1;
    this.ID = ID;
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.activeSizes = activeSizes;
    this.quantity = quantity;
    this.reviews = reviews;
    this.images = images;

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
};

let searchProducts = function(products, search1) {
    let search = '';
    let result = '';
    let t = /^[a-z]$/i;
    for (i of search1) {
        if (t.test(i) === true) {search += i;}
    };
    for (i = 0; i < products.length; i++) { 
        if (products[i].name.includes(search)) {result += products[i].name + '\n'};
    };
    return result;
};
let sortProducts = function(products, sortRule) {
    if (sortRule === 'price') {
        return products.sort((a,b) => a.price - b.price);
    } else if (sortRule === 'ID') {
        return products.sort((a,b) => a.ID - b.ID);
    } else if (sortRule === 'name'){
        return products.sort((a,b) => a.name - b.name);
    };
};


function Review(ID, author, date, comment, rating) {
    this.ID = ID;
    this.author = author;
    this.date = date;
    this.comment = comment;
    this.rating = rating;
};


let counterID = 3;


Products();
let product1 = new Products(1, 'susipatr', 'kit', 1.1, 'sirko', ['XXL', 'XL'], 1, [new Review(1, 'CAT_1337', Date.now, "meow meow meow meow", {'service' : 2, 'value': 2, 'price': 3, 'quality': 4})], ['test23', 'test48']);
let product2 = new Products(2, 'arthur', 'author of code', Infinity, 'mama', ['M'], 1, [new Review(1, 'saikomatyny', Date.now, "i'm saikomatyny, AKA Arthur Kham", {'service' : 5, 'value': 4, 'price': 4, 'quality': 5}), new Review(2, 'artem2', Date.now, "i'm artem", {'service' : 1, 'value': 2, 'price': 2, 'quality': 4})], ['test1', 'test2']);
let product3 = new Products(3, 'artem', 'some arndom chelick', 0, 'idk', ['XS'], 200, [new Review(1, 'artem2', Date.now, "i'm artem", {'service' : 1, 'value': 2, 'price': 2, 'quality': 4})], []);

console.log(sortProducts([product2, product3], 'ID'))
