import initial from './initial';

const addIngredient = (state, { ingredient }) => {
    return {
        ...state,
        chosenIngredients: [...state.chosenIngredients, ingredient], 
    };
};

const removeIngredient = (state, { ingredient }) => {
    return {
        ...state,
        chosenIngredients: state.chosenIngredients.filter(item => item !== ingredient), 
    };
};

const reducer = (state, action) => {
    switch (action.type) { 
        case "add": return addIngredient(state, action);
        case "remove": return removeIngredient(state, action);
        default: return state;
    }; 
};

export default reducer;