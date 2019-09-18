import React from 'react';

const Ingredients = ({ recipe }) => (
    <ol>
        { recipe.method.map((step, index) => (
            <li key={ index }>{ step }</li>
        ))}
    </ol>
);
export default Ingredients;