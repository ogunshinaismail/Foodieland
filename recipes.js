// let current_page = 1;
// let records_per_page = 3;

const recipes = [
    {
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        img: "img/cheeseburger.png",
        prepTime: 15,
        cookingTime: 15,
        type: "Snack",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },

    {
        name: "Fresh Lime Roasted Salmon with Ginger Sauce",
        img: "img/salmon.png",
        prepTime: 15,
        cookingTime: 30,
        type: "Fish",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },

    {
        name: "Strawberry Oatmeal Pancake with Honey Syrup",
        img: "img/pancake.png",
        prepTime: 15,
        cookingTime: 30,
        type: "Breakfast",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },

    {
        name: "Fresh and Healthy Mixed Mayonnaise Salad",
        img: "img/salad.png",
        prepTime: 15,
        cookingTime: 30,
        type: "Healthy",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },

    {
        name: "Chicken Meatballs with Cream Cheese",
        img: "img/meatball.png",
        prepTime: 15,
        cookingTime: 30,
        type: "Meat",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },

    {
        name: "Fruity Pancake with Orange & Blueberry",
        img: "img/fruity-pancake.png",
        prepTime: 15,
        cookingTime: 30,
        type: "Sweet",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },

    {
        name: "The Best Easy One Pot Chicken and Rice",
        img: "img/pot-chicken.png",
        prepTime: 15,
        cookingTime: 30,
        type: "Snack",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },

    {
        name: "The Creamiest Creamy Chicken and Bacon Pasta",
        img: "img/bacon-pasta.png",
        prepTime: 15,
        cookingTime: 15,
        type: "Noodles",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },

    {
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        img: "img/cheeseburger.png",
        prepTime: 15,
        cookingTime: 15,
        type: "snack",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },

    {
        id: 10,
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        img: "img/cheeseburger.png",
        prepTime: 15,
        cookingTime: 15,
        type: "snack",
        chef: "John Smith",
        chefImage: "img/cheeseburger.png",
        date: "15 March 2022",
        calories: 219.9,
        totalFat: 10.7,
        protein: 7.9,
        carbohydrate: 22.3,
        cholesterol: 37.4,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        blogDesc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
        ingredientMainDish: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        ingredientTheSauce: [
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet",
        ],
        directions: [
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            },
            {
                topic: "Lorem ipsum dolor sit amet",
                directionDesc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
            }
        ]
    },
]

const recipesCard = document.querySelector(".recipes-card")

let reciCard = recipes.map( recipe => {
    return `<div class="new-recipes">
                <i class="fa-solid fa-heart like"></i>
                <img src="${recipe.img}" alt="">
                <p class="recipe-desc">${recipe.name}</p>
                <div class="recipe-time-prod">
                    <div class="recipe-time">
                        <i class="fa-solid fa-stopwatch"></i>
                        <p>${recipe.cookingTime} Minutes</p>
                    </div>
                    <div class="recipe-prod">
                        <i class="fa-solid fa-utensils"></i>
                        <p>${recipe.type}</p>
                    </div>
                </div>
            </div>`
});
reciCard = reciCard.join('');
recipesCard.innerHTML = reciCard

 














// function prevPage() {
//     if (current_page > 1) {
//         current_page--;
//         changePage(current_page);
//     }
// }

// function nextPage() {
//     if (current_page < numPages()) {
//         current_page++;
//         changePage(current_page);
//     }
// }

// function changePage(page) {

//     const btn_next = document.getElementById("btn_next");
//     const btn_prev = document.getElementById("btn_prev");

    // const listing_table = document.querySelector(".recipes-card");

    // const listing_table = document.querySelector(".post");
    // const page_span = document.getElementById("page");

    // // Validate page
    // if (page < 1) page = 1;
    // if (page > numPages()) page = numPages();

    // listing_table.innerHTML = "";

    // for (
    //     let i = (page - 1) * records_per_page;
    //     i < (page * records_per_page) && i < objJson.length;
    //     i++
    // ) {
    //     listing_table.innerHTML += `<img src="${objJson[i].img}" alt="" class="post-img">
    //         <div class="post-details">
    //             <h3 class="post-title">${objJson[i].name}</h3>
    //             <p class="post-desc">${objJson[i].blogDesc} </p>
    //             <div class="post-chef-date">
    //                 <div class="post-chef">
    //                     <img src="${objJson[i].chefImage}" alt="">
    //                     <p>Wade Warren</p>
    //                 </div>
    //                 <p class="post-date">${objJson[i].date}</p>
    //             </div>
    //         </div>`;
    // }

    // page_span.innerHTML = page + "/" + numPages();


//     console.log(page)
//     page_span.innerHTML += `<li>${page}</li>`;

//     for (let i=0; i<numPages(); i) {
//         page_span.innerHTML +=`<button class="btn btn-primary"
//         value="${i+page}">${i+page}</button>`
//     }

//     if (page == 1) {
//         btn_prev.style.visibility = "hidden";
//     } else {
//         btn_prev.style.visibility = "visible";
//     }

//     if (page == numPages()) {
//         btn_next.style.visibility = "hidden";
//     } else {
//         btn_next.style.visibility = "visible";
//     }
// }

// function numPages() {
//     return Math.ceil(objJson.length / records_per_page);
// }

// window.onload = function() {
//     changePage(1);
// };




 // listing_table.innerHTML += objJson[i].adName + "<br>";
        // listing_table.innerHTML += `<div class="recipe">
        //                                 <i class="fa-solid fa-heart like"></i>
        //                                 <img src="${objJson[i].img}" alt="">
        //                                 <p class="recipe-desc">${objJson[i].name}</p>
        //                                 <div class="recipe-time-prod">
        //                                     <div class="recipe-time">
        //                                         <i class="fa-solid fa-stopwatch"></i>
        //                                         <p>${objJson[i].cookingTime} Minutes</p>
        //                                     </div>
        //                                     <div class="recipe-prod">
        //                                         <i class="fa-solid fa-utensils"></i>
        //                                         <p>${objJson[i].type}</p>
        //                                     </div>
        //                                 </div>
        //                             </div>`