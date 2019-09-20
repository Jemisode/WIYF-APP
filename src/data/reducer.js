import initial from './initial';

const addIngredient = (state, { ingredient }) => {
    return {
        ...state,
        chosenIngredients: [...state.chosenIngredients, ingredient], 
    };
};

const addIngredientID = (state, { ingredientID }) => {
    return {
        ...state,
        chosenIngredientsIDs: [...state.chosenIngredientsIDs, ingredientID], 
    };
};

const removeIngredient = (state, { ingredient }) => {
    return {
        ...state,
        chosenIngredients: state.chosenIngredients.filter(item => item !== ingredient), 
    };
};

const updateRecipe = (state, { recipe }) => {
    return {
        ...state,
        chosenRecipe: recipe, 
    };
};

const reducer = (state, action) => {
    switch (action.type) { 
        case "add": return addIngredient(state, action);
        case "remove": return removeIngredient(state, action);
        case "update": return updateRecipe(state, action);
        case "addID": return addIngredientID(state, action);
        default: return state;
    }; 
};

export default reducer;