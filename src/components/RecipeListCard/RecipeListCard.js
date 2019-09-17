import React from 'react';

const RecipeListCard = ({ recipes }) => (
    recipes.map({recipe, index} => (
        <div key={index} className="card">
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src={ recipe.imageSrc } className="card-img" alt={ recipe.imageAlt } />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title">{ recipe.name }</h3>
                    <p className="card-text">{ recipe.description }</p>
                </div>
                </div>
            </div>
        </div>
    ))
);

export default RecipeListCard;