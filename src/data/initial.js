import React from 'react';
import placeholder from '../assets/tomato.jpg';
console.log(placeholder);

const initial = {
    ingredients: ["tomato", "potato", "cucumber", "orange", "peach", "banana", "basil", "spaghetti", "mushrooms"],
    chosenIngredients: [],
    recipes: [
        {   
            name: "Pasta",
            description: "A lovely pasta dish",
            imageSrc: "/static/media/tomato.f63d4fd4.jpg",
            imageAlt: "A lovely pasta dish",
            prepTime: "20 mins",
            serves: 4
        },
        {
            name: "Pizza",
            description: "A big pizza",
            imageSrc: "/static/media/tomato.f63d4fd4.jpg",
            imageAlt: "A big pizza",
            prepTime: "Forever",
            serves: 1
        },
        {
            name: "Tomato",
            description: "A tasty tomato",
            imageSrc: "/static/media/tomato.f63d4fd4.jpg",
            imageAlt: "A tasty tomato",
            prepTime: "1 hour",
            serves: 2
        },
        {   
            name: "Pasta",
            description: "A lovely pasta dish",
            imageSrc: "/static/media/tomato.f63d4fd4.jpg",
            imageAlt: "A lovely pasta dish",
            prepTime: "35 mins",
            serves: 4
        },
        {
            name: "Pizza",
            description: "A big pizza",
            imageSrc: "/static/media/tomato.f63d4fd4.jpg",
            imageAlt: "A big pizza",
            prepTime: "15 mins",
            serves: 2
        },
        {
            name: "Tomato",
            description: "A tasty tomato",
            imageSrc: "/static/media/tomato.f63d4fd4.jpg",
            imageAlt: "A tasty tomato",
            prepTime: "45 mins",
            serves: 10
        }
    ],
    recipe: {
        name: "Tomato",
        description: "A tasty tomato",
        imageSrc: "/static/media/tomato.f63d4fd4.jpg",
        imageAlt: "A tasty tomato",
        prepTime: "45 mins",
        serves: 10,
        ingredients: [
            {
                name: "tomato",
                amount: "1"
            },
            {
                name: "salt",
                amount: "a pinch"
            },
            {
                name: "pepper",
                amount: "1 teaspoon"
            }
        ],
        method: "#Step 1 : Cut up the tomato #Step 2 : Salt the tomato #Step 3 : Rub pepper on the tomato #Step 4 : Enjoy!"

    }
    
};

export default initial;