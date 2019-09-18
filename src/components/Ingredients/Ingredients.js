import React from 'react';

const Ingredients = ({ recipe }) => (
    <ul>
        { recipe.ingredients.map((ingredient, index) => (
            <li key={ index }>{ ingredient.name } - { ingredient.amount }</li>
        ))}
    </ul>
);
export default Ingredients;