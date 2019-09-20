import initial from './initial';

const addIngredient = (state, { id, name }) => {
    return {
        ...state,
        chosenIngredients: [...state.chosenIngredients, {id: id, name: name}], 
    };
};

const removeIngredient = (state, { id }) => {
    return {
        ...state,
        chosenIngredients: state.chosenIngredients.map(ingredient => ingredient.id ).filter(item => item !== id), 
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
        default: return state;
    }; 
};

export default reducer;