import React from 'react';

const Recipe = ({ recipe }) => (
    <div>
        <h2>{ recipe.name }</h2>
        <p>{ recipe.description }</p>
        <p><small className="text-muted">Serves { recipe.serves }</small></p>
        <p><small className="text-muted">Prep time { recipe.prepTime }</small></p>


    </div>
);
export default Recipe;