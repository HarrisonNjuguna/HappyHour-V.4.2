

const categories = [
    {
        "_id": "6537ece708ff5b7de97d0695",
        "title": "Whiskey",
        "value": "whiskey",
        "imageUrl": "https://pngimg.com/uploads/whisky/whisky_PNG132.png",
        "createdAt": "2023-10-24T16:12:23.571Z",
        "updatedAt": "2023-10-24T16:12:23.571Z",
        "__v": 0
    },
    {
        "_id": "65310f3381e4d98d60b093c5",
        "title": "Gin",
        "value": "gin",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/ee2d952c-1d7d-48f7-81b3-cb967343eb6c-curry.png",
        "__v": 0
    },
    {
        "_id": "6531206cbbe4998e90af3feb",
        "title": "Beers",
        "value": "beers",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/466693e6-f999-42e0-8794-09325ece1b45-Pizza.png",
        "__v": 0
    },
    {
        "_id": "6531209dbbe4998e90af3fef",
        "title": "Rum",
        "value": "rum",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/6645cf41-bc89-4dd0-9f80-bba9487633b2-Spaghetti.png",
        "__v": 0
    },
    {
        "_id": "653120babbe4998e90af3ff1",
        "title": "Wine",
        "value": "wine",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/93c4b3df-9e55-4308-a834-9fe4ad67c0b3-bar.png",
        "__v": 0
    },
    {
        "_id": "65312084bbe4998e90af3fed",
        "title": "Tequilla",
        "value": "tequilla",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/3c94bc09-b8b9-4961-accb-f68b7e8121cc-Hamburger.png",
        "__v": 0
    },
    {
        "_id": "65310efb81e4d98d60b093c3",
        "title": "Soft Drinks",
        "value": "soft_drinks",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/139718b2-2832-40c5-8d7b-11fd9feb0aac-chicken.png",
        "__v": 0
    },
    {
        "_id": "653120e1bbe4998e90af3ff3",
        "title": "More",
        "value": "more",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/08323562-a3c6-461d-95a3-b3817c99871b-more.png",
        "__v": 0
    }
]

const restaurants = [
    {
        "_id": "6530ebbcc9e72013e5b65933",
        "title": "SHOP 1test",
        "time": "15 min",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
        "owner": "fdfsdfsdfs",
        "code": "41007428",
        "logoUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
        "rating": 5,
        "ratingCount": "6765",
        "coords": {
            "id": "2023",
            "latitude": 37.78792117665919,
            "longitude": -122.41325651079953,
            "address": "698 Post St, San Francisco, CA 94109, United States",
            "title": "SHOP 1test",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        }
    },
    {
        "_id": "6530ea6bc9e72013e5b6592d",
        "title": "SHOP 2test",
        "time": "30 min",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
        "owner": "sjgdsjgfjshhjs",
        "code": "41007428",
        "logoUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
        "rating": 5,
        "ratingCount": "3278",
        "coords": {
            "id": "2020",
            "latitude": 37.785925590588505,
            "longitude": -122.41007428687641,
            "address": "333 O'Farrell St, San Francisco, CA 94102, United States",
            "title": "SHOP 2test",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        }
    },
    {
        "_id": "6530eb66c9e72013e5b65931",
        "title": "SHOP 3test",
        "time": "25 min",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
        "owner": "fgdgdfgd",
        "code": "41007428",
        "logoUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
        "rating": 5,
        "ratingCount": "5666",
        "coords": {
            "id": "2022",
            "latitude": 37.787503258917035,
            "longitude": -122.39854938269353,
            "address": "333 O'Farrell St, San Francisco, CA 94102, United States",
            "title": "SHOP 3test",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        }
    },
    {
        "_id": "6530eb23c9e72013e5b6592f",
        "title": "SHOP 4test",
        "time": "35 min",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
        "owner": "sjgdsjgfjshhjs",
        "code": "41007428",
        "logoUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
        "rating": 5,
        "ratingCount": "3278",
        "coords": {
            "id": "2021",
            "latitude": 37.78557922976825,
            "longitude": -122.40722000299483,
            "address": "333 O'Farrell St, San Francisco, CA 94102, United States",
            "title": "SHOP 4test",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        }
    }
]

const foods = [
    {
        "_id": "65316968f94c6496dc84f3c1",
        "title": "SHOP 1test",
        "foodTags": [
            "750ml",
            "1 Litre",
            "Black Barrel",
            "Test3",
            "Test4"
        ],
        "foodType": [
            "Dessert"
        ],
        "code": "41007428",
        "isAvailable": true,
        "restaurant": "6530ea6bc9e72013e5b6592d",
        "rating": 4.9,
        "ratingCount": "420",
        "description": "Jim Beam Black Bourbon Whiskey stands as a testament to the art of bourbon craftsmanship, delivering a premium experience designed for sipping and savoring.",
        "price": 7.99,
        "additives": [
            {
                "id": 1,
                "title": "Coke Zero",
                "price": "1.00"
            },
            {
                "id": 2,
                "title": "Tumblers",
                "price": "1.50"
            },
            {
                "id": 3,
                "title": "Delmonte",
                "price": "2.50"
            },
            {
                "id": 4,
                "title": "Additive 4",
                "price": "0.50"
            },
            {
                "id": 5,
                "title": "Additive 5",
                "price": "0.50"
            }
        ],
        "imageUrl": [
            "https://qph.cf2.quoracdn.net/main-qimg-5f02812570c604663972a89188ab223f"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "35 min"
    },
    {
        "_id": "653168e9f94c6496dc84f3bf",
        "title": "SHOP 2test",
        "foodTags": [
            "Italian",
            "Creamy",
            "Pasta",
            "Bacon",
            "Egg"
        ],
        "foodType": [
            "Main Course",
            "Lunch",
            null
        ],
        "code": "41007428",
        "isAvailable": true,
        "restaurant": "6530ea6bc9e72013e5b6592d",
        "rating": 4.7,
        "ratingCount": "310",
        "description": "A traditional Italian pasta dish with creamy egg sauce, pancetta, and cheese.",
        "price": 14.99,
        "additives": [
            {
                "id": 1,
                "title": "Egg",
                "price": "1.00"
            },
            {
                "id": 2,
                "title": "Pancetta",
                "price": "3.00"
            },
            {
                "id": 3,
                "title": "Parmesan Cheese",
                "price": "2.00"
            },
            {
                "id": 4,
                "title": "Black Pepper",
                "price": "0.50"
            },
            {
                "id": 5,
                "title": "Pasta",
                "price": "3.00"
            }
        ],
        "imageUrl": [
            "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp"
        ],
        "__v": 2,
        "category": "6531209dbbe4998e90af3fef",
        "time": "20 min"
    },
    {
        "_id": "653169a9f94c6496dc84f3c3",
        "title": "SHOP 3test",
        "foodTags": [
            "Vegan",
            "Healthy",
            "Salad",
            "Fresh",
            "Organic"
        ],
        "foodType": [
            "Starter",
            "Lunch",
            "Dinner",
            "Health",
            "Vegan"
        ],
        "code": "41007428",
        "isAvailable": true,
        "restaurant": "6530ea6bc9e72013e5b6592d",
        "rating": 4.6,
        "ratingCount": "230",
        "description": "A refreshing mix of organic vegetables, nuts, seeds, and a tangy vinaigrette.",
        "price": 11.99,
        "additives": [
            {
                "id": 1,
                "title": "Mixed Greens",
                "price": "1.50"
            },
            {
                "id": 2,
                "title": "Walnuts",
                "price": "2.00"
            },
            {
                "id": 3,
                "title": "Quinoa",
                "price": "1.50"
            },
            {
                "id": 4,
                "title": "Cherry Tomatoes",
                "price": "1.00"
            },
            {
                "id": 5,
                "title": "Vinaigrette",
                "price": "0.50"
            }
        ],
        "imageUrl": [
            "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "55 min"
    },
    {
        "_id": "65316771f94c6496dc84f3bd",
        "title": "SHOP 4test",
        "foodTags": [
            "Italian",
            "Cheesy",
            "Vegetarian"
        ],
        "foodType": [
            "Main Course"
        ],
        "code": "41007428",
        "isAvailable": true,
        "restaurant": "6530ebbcc9e72013e5b65933",
        "rating": 4.5,
        "ratingCount": "150",
        "description": "A classic Margherita pizza with fresh tomatoes, mozzarella cheese, basil, and olive oil.",
        "price": 12.99,
        "additives": [
            {
                "id": 1,
                "title": "Cheese",
                "price": "2.00"
            },
            {
                "id": 2,
                "title": "Pepperoni",
                "price": "2.50"
            },
            {
                "id": 3,
                "title": "Ketch up",
                "price": "0.50"
            }
        ],
        "imageUrl": [
            "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
            "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "30 min"
    },
    {
        "_id": "65316a01f94c6496dc84f3c7",
        "title": "SHOP 5test",
        "foodTags": [
            "Fruit",
            "Smoothie",
            "Refreshing",
            "Sweet",
            "Cold"
        ],
        "foodType": [
            "Drink",
            "Breakfast",
            "Snack",
            "Dessert",
            "Vegan"
        ],
        "code": "41007428",
        "isAvailable": true,
        "restaurant": "6530ea6bc9e72013e5b6592d",
        "rating": 4.7,
        "ratingCount": "280",
        "description": "A delightful blend of tropical fruits, creating the perfect sweet and refreshing drink.",
        "price": 6.99,
        "additives": [
            {
                "id": 1,
                "title": "Mango",
                "price": "2.00"
            },
            {
                "id": 2,
                "title": "Pineapple",
                "price": "1.50"
            },
            {
                "id": 3,
                "title": "Banana",
                "price": "1.00"
            },
            {
                "id": 4,
                "title": "Coconut Milk",
                "price": "1.50"
            },
            {
                "id": 5,
                "title": "Ice",
                "price": "0.50"
            }
        ],
        "imageUrl": [
            "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "25 min"
    },
    {
        "_id": "653169d8f94c6496dc84f3c5",
        "title": "SHOP 6test",
        "foodTags": [
            "Barbecue",
            "Meat",
            "Grilled",
            "Spicy",
            "Savory"
        ],
        "foodType": [
            "Main Course",
            "Dinner",
            "Grill",
            "Non-Vegetarian",
            "Barbecue"
        ],
        "code": "41007428",
        "isAvailable": true,
        "restaurant": "6530ea6bc9e72013e5b6592d",
        "rating": 4.8,
        "ratingCount": "320",
        "description": "A succulent assortment of grilled meats, served with sides and sauces.",
        "price": 18.99,
        "additives": [
            {
                "id": 1,
                "title": "Chicken",
                "price": "3.00"
            },
            {
                "id": 2,
                "title": "Beef",
                "price": "4.00"
            },
            {
                "id": 3,
                "title": "Lamb",
                "price": "4.00"
            },
            {
                "id": 4,
                "title": "Pork",
                "price": "3.50"
            },
            {
                "id": 5,
                "title": "Barbecue Sauce",
                "price": "1.00"
            }
        ],
        "imageUrl": [
            "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "45 min"
    }
]

const cart =  [
    {
        "_id": "653b6588541d2aa2c1e89cd1",
        "userId": "6537a4448cd1bd140ebddcee",
        "productId": {
            "_id": "65316771f94c6496dc84f3bd",
            "title": "Margherita Pizza",
            "restaurant": "6530ebbcc9e72013e5b65933",
            "rating": 4.5,
            "ratingCount": "150",
            "imageUrl": [
                "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
                "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp"
            ]
        },
        "additives": [
            "Extra Cheese",
            "Mushrooms"
        ],
        "instructions": "",
        "totalPrice": 25.98,
        "quantity": 2,
        "__v": 0
    }
]

const profile = {
    "_id": "6537a4448cd1bd140ebddcee",
    "username": "Dbestech",
    "email": "db@king.com",
    "uid": "4NmOkCbvu7ToaBS9ZR1UVpv0G1g2",
    "address": [],
    "userType": "Vendor",
    "profile": "https://d326fntlu7tb1e.cloudfront.net/uploads/bdec9d7d-0544-4fc4-823d-3b898f6dbbbf-vinci_03.jpeg",
    "updatedAt": "2023-10-24T11:02:28.215Z"
}

const choicesList = [
    {
    id: 1,
    name: "Pick Up",
    value: "pickup",
    
},
{
    id: 2,
    name: "4 Star",
    value: "4star",
    
},
{
    id: 3,
    name: "3 Star",
    value: "3star",
    
},
{
    id: 4,
    name: "Under 30 min",
    value: "under30",
    
},
{
    id: 5,
    name: "Recommended",
    value: "recommended",
    
}
];

export default  {categories, restaurants, foods, cart, profile, choicesList}