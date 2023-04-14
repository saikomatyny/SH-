

function Products(ID, name, description, price, brand, activeSizes, quantity, reviews, images) {
    counterID += 1;
    this.ID = ID;
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.activeSizes = activeSizes;
    this.quantity = quantity;
    this.reviews = reviews || [];
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
        if (imageID.length == 0) {return this.images[0]} else {return this.images[imageID]};
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
    this.deleteReview = function(rule) {
        for (let i = 0; i < this.reviews.length; i++) {
                if (this.reviews[i] === rule) {
                    this.reviews.splice(i, 1); 
                    break; 
                };
            };
    };
    this.getReviewByID = function(reviewID) {
        for (i of this.reviews) {
            if (i.ID === reviewID){
                return i;
            }
        };
    };

};

let counterID = 3;

/*Products(counterID,
prompt('Type name of product: '), 
prompt('Type description of product'), 
prompt('Type price of product: '),
prompt('Type brand of product: '), 
prompt('Type available sizes of product: ', 'XS, S, M, L, XL, XXL'),
prompt('Type count of available good: '),
prompt('Type any review if you want to: '),
prompt('Type an URL of image of object: '));*/

Products();
let product1 = new Products(1, 'susipatr', 'kit', 1.1, 'sirko', ['XXL', 'XL'], 1, {'ID': 1, 'author': 'CAT_1337', 'date': Date.now, 'comment': "meow meow meow meow", 'rating': 2}, ['test23, test48']);
let product2 = new Products(2, 'arthur', 'author of code', Infinity, 'mama', ['M'], 1, {'ID': 2, 'author': 'saikomatyny', 'date': Date.now, 'comment': "i'm saikomatyny, AKA Arthur Kham", 'rating': 5}, ['test1, test2']);
let product3 = new Products(3, 'artem', 'some arndom chelick', 0, 'idk', ['XS'], 200, {'ID': 3, 'author': 'artem2', 'date': Date.now, 'comment': "i'm artem", 'rating': 4.2}, []);

console.log(getReviewByID(prompt()));

