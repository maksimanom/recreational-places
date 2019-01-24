const mongoose = require('mongoose');
const Product = require('../models/Product');

const products = [
  {
    "info" : {
      "name" : "Час Поїсти",
      "dimensions" : "Бульвар Шевченка 208",
      "weight" : "09:00 - 22:00",
      "problem" : "Столова",
      "price" : 5,
      "photo" : "/img/чп шев.jpg"
  },
    "tags" : {
      "priceRange" : "<10",
      "brand" : "chp",
      "repair" : "shev",
      "replist" : "stol"
  }
},
  {
    "info" : {
      "name" : "Час Поїсти",
      "dimensions" : "Остафія Дашковича 19",
      "weight" : "09:00 - 22:00",
      "problem" : "Столова",
      "price" : 5,
      "photo" : "/img/чп ост.jpeg"
  },
    "tags" : {
      "priceRange" : "<10",
      "brand" : "chp",
      "repair" : "ost",
      "replist" : "stol"
  }
},
  {
    "info" : {
      "name" : "Коза Ностра",
      "dimensions" : "Бульвар Шевченка 108",
      "weight" : "11:00 - 00:00",
      "problem" : "Ресторан",
      "price" : 10,
      "photo" : "/img/коз.jpg"
  },
    "tags" : {
      "priceRange" : "10-50",
      "brand" : "koz",
      "repair" : "shev",
      "replist" : "rest"
  }
},
  {
    "info" : {
      "name" : "Крила",
      "dimensions" : "Бульвар Шевченка 187",
      "weight" : "10:00 - 23:00",
      "problem" : "Фастфуд",
      "price" : 7,
      "photo" : "/img/крила.jpg"
  },
    "tags" : {
      "priceRange" : "<10",
      "brand" : "krl",
      "repair" : "shev",
      "replist" : "fast"
  }
},
  {
    "info" : {
      "name" : "Макдональдз",
      "dimensions" : "Бульвар Шевченка 108",
      "weight" : "09:00 - 21:00",
      "problem" : "Фастфуд",
      "price" : 10,
      "photo" : "/img/мак люб.jpg"
  },
    "tags" : {
      "priceRange" : "10-50",
      "brand" : "mak",
      "repair" : "shev",
      "replist" : "fast"
  }
},
  {
    "info" : {
      "name" : "МакДональдз",
      "dimensions" : "Смілянська 31",
      "weight" : "10:00 - 00:00",
      "problem" : "Фастфуд",
      "price" : 10,
      "photo" : "/img/мак см.jpeg"
  },
    "tags" : {
      "priceRange" : "10-50",
      "brand" : "mak",
      "repair" : "smil",
      "replist" : "fast"
  }
},
  {
    "info" : {
      "name" : "Ферма",
      "dimensions" : "Бульвар Шевченка 222",
      "weight" : "09:00 - 23:00",
      "problem" : "Ресторан",
      "price" : 15,
      "photo" : "/img/ферма.jpg"
  },
    "tags" : {
      "priceRange" : "10-50",
      "brand" : "ferm",
      "repair" : "shev",
      "replist" : "rest"
  }
}
];

const seedProducts = () => {
  Product.remove({}, (err) => {
    if(err) {
      console.log(err);
    }
    console.log('PRODUCTS REMOVED');
    products.forEach((product) => {
      Product.create(product, (err, createdProduct) => {
        if(err) {
          console.log(err);
        } else {
          console.log('PRODUCT CREATED');
          createdProduct.save();
        }
      })
    })
  })
}

module.exports = seedProducts;