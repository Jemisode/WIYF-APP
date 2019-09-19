import React from 'react';

const Ingredients = ({ ingredients }) => (
    <ul>
        { ingredients.map((ingredient, index) => (
            <li key={ index }>{ ingredient.name } - { ingredient.quantity }</li>
        ))}
    </ul>
);
export default Ingredients;